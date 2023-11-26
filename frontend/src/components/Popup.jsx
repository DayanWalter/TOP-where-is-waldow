import styles from './Popup.module.css';

export default function Popup(coords) {
  const position = {
    left: coords.coords.x,
    top: coords.coords.y,
  };
  return (
    <div className={styles.container} style={position}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            <h1>Popup</h1>
            <ul>
              <li>Char 1</li>
              <li>Char 2</li>
              <li>Char 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
