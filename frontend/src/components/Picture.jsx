import { useEffect, useState } from 'react';
import picture from '../assets/ricknmorty.jpg';
import styles from './Picture.module.css';
import Popup from './Popup';
import { useOutletContext } from 'react-router-dom';

export default function Picture() {
  const [foundChars, setFoundChars, time, setTime] = useOutletContext();
  // Fetch Time from server after entering site(pressing START)
  useEffect(() => {
    setTime({
      ...time,
      end: null,
      start: Date.now(),
    });
    // const fetchTime = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:3000/picture`, {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         time: Date.now(),
    //       }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     if (!response.ok) {
    //       console.error('Error:', response.statusText);
    //     }
    //     const json = await response.json();
    //     console.log(json);
    //   } catch (error) {
    //     console.error('Error', error);
    //   }
    //   console.log('fetchTime executed');
    // };
    // fetchTime();
  }, []);

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

    // Where are we on the picture?
    const leftSide = event.clientX - boundingBox.left;
    const topSide = event.clientY - boundingBox.top;

    // Check if the popup is on the image
    let popupX, popupY;
    if (leftSide + 200 > boundingBox.width) {
      popupX = leftSide - 200;
    } else {
      popupX = leftSide;
    }

    if (topSide + 405 > boundingBox.height) {
      popupY = topSide - 405;
    } else {
      popupY = topSide;
    }

    setPopupCoords({ x: popupX, y: popupY });

    // Normalize  coords for database
    const normalizedCoords = normalizeCoords(leftSide, topSide, boundingBox);
    const { x, y } = normalizedCoords;
    // console.log(`X: ${x} Y: ${y}`);

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
        {showPopup && <Popup popupCoords={popupCoords} coords={coords} />}
      </div>
    </>
  );
}
