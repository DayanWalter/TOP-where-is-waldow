import rick from '../assets/statueofrick.png';
import morty from '../assets/morty.png';
import girl from '../assets/littlegirl.png';

import styles from './Popup.module.css';

export default function Popup({ coords }) {
  const position = {
    left: coords.x,
    top: coords.y,
  };
  return (
    <div className={styles.container} style={position}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            <ul>
              <li className={styles.listitem}>
                <img className={styles.chars} src={rick} alt="statue of rick" />
              </li>

              <li className={styles.listitem}>
                <img className={styles.chars} src={morty} alt="morty" />
              </li>

              <li className={styles.listitem}>
                <img className={styles.chars} src={girl} alt="little girl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
