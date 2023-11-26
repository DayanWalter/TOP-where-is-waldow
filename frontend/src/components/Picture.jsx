import { useState } from 'react';
import picture from '../assets/ricknmorty.jpg';
import styles from './Picture.module.css';
import Popup from './Popup';

export default function Picture() {
  const [coords, setCoords] = useState({ x: null, y: null });

  const [popupCoords, setPopupCoords] = useState({ x: null, y: null });

  const [showPopup, setShowPopup] = useState(false);

  // Normalize coords for database(function)
  const normalizeCoords = (x, y, boundingBox) => {
    // Define the width and height of img
    const imageWidth = boundingBox.width;
    const imageHeight = boundingBox.height;

    // Normalize coords by creating percentile
    const normalizeX = (x / imageWidth) * 100;
    const normalizeY = (y / imageHeight) * 100;

    return { x: normalizeX, y: normalizeY };
  };

  const handleClick = (event) => {
    const picture = event.currentTarget;
    const boundingBox = picture.getBoundingClientRect();

    // Keep the popup on the site
    const leftSide = event.clientX - boundingBox.left;
    const topSide = event.clientY - boundingBox.top;

    // Check if the popup is on the image
    let rawX, rawY;
    if (leftSide + 200 > boundingBox.width) {
      rawX = leftSide - 200;
    } else {
      rawX = leftSide;
    }

    if (topSide + 200 > boundingBox.height) {
      rawY = topSide - 200;
    } else {
      rawY = topSide;
    }

    setPopupCoords({ x: rawX, y: rawY });

    // Normalize  coords for database
    const normalizedCoords = normalizeCoords(rawX, rawY, boundingBox);
    const { x, y } = normalizedCoords;

    // Set coords for database
    setCoords({ x, y });

    // Show the popup
    setShowPopup(true);
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src={picture}
          alt="PixelPicture"
          className={styles.img}
          onClick={handleClick}
        />
        {showPopup && <Popup coords={popupCoords} />}
      </div>
    </>
  );
}
