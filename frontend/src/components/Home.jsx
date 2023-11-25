import picture from '../assets/ricknmorty.jpg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <img src={picture} alt="PixelPicture" className={styles.img} />
    </>
  );
}
