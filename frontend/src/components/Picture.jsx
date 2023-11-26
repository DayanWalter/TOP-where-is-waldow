import { useState } from 'react';
import picture from '../assets/ricknmorty.jpg';
import styles from './Picture.module.css';
import Popup from './Popup';

export default function Picture() {
  const [coords, setCoords] = useState({ x: null, y: null });

  const [rawCoords, setRawCoords] = useState({ x: null, y: null });

  const [popup, setPopup] = useState(false);

  const normalizeCoords = (x, y, boundingBox) => {
    const imageWidth = boundingBox.width;
    const imageHeight = boundingBox.height;

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

    setRawCoords({ x: rawX, y: rawY });

    const normalizedCoords = normalizeCoords(rawX, rawY, boundingBox);
    const { x, y } = normalizedCoords;

    setCoords({ x, y });
    setPopup(true);
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
        {popup && <Popup coords={rawCoords} />}
      </div>
    </>
  );
}
