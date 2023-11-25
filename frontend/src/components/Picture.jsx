import picture from '../assets/ricknmorty.jpg';
import styles from './Picture.module.css';

export default function Picture() {
  return (
    <>
      <img src={picture} alt="PixelPicture" className={styles.img} />
    </>
  );
}
