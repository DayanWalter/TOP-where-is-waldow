import { useState } from 'react';
import picture from '../assets/ricknmorty.jpg';
import styles from './Picture.module.css';

export default function Picture() {
  const [coords, setCoords] = useState({ x: null, y: null });

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

    const rawX = event.clientX - boundingBox.left;
    const rawY = event.clientY - boundingBox.top;
    const normalizedCoords = normalizeCoords(rawX, rawY, boundingBox);
    const { x, y } = normalizedCoords;
    setCoords({ x, y });
  };

  return (
    <>
      <img
        src={picture}
        alt="PixelPicture"
        className={styles.img}
        onClick={handleClick}
      />
    </>
  );
}
