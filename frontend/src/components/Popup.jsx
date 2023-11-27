import rick from '../assets/statueofrick.png';
import morty from '../assets/morty.png';
import girl from '../assets/littlegirl.png';

import styles from './Popup.module.css';

export default function Popup({ popupCoords, coords }) {
  const handleSubmit = async (selectedValue) => {
    // Name of the button/char
    console.log(selectedValue);

    // // Position clicked
    // console.log(coords);

    // Clicked x value
    console.log(coords.x);

    try {
      const response = await fetch('http://localhost:3000/chars', {
        method: 'GET',
      });
      if (!response.ok) {
        console.error('Error:', response.statusText);
      }
      const json = await response.json();

      if (
        coords.x >= +json.allChars[0].xCoords - 2.5 &&
        coords.x <= +json.allChars[0].xCoords + 2.5 &&
        coords.y >= +json.allChars[0].yCoords - 2.5 &&
        coords.y <= +json.allChars[0].yCoords + 2.5
      ) {
        console.log('Success');
      }
      //xCoords of rick
      console.log(+json.allChars[0].xCoords);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const popupPosition = {
    left: popupCoords.x,
    top: popupCoords.y,
  };

  return (
    <div className={styles.container} style={popupPosition}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            <form id="characterForm" onSubmit={handleSubmit}>
              <ul>
                <li className={styles.listitem}>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit('rick');
                    }}
                  >
                    <img
                      className={styles.chars}
                      src={rick}
                      alt="statue of rick"
                    />
                  </button>
                </li>

                <li className={styles.listitem}>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit('morty');
                    }}
                  >
                    <img className={styles.chars} src={morty} alt="morty" />
                  </button>
                </li>

                <li className={styles.listitem}>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit('girl');
                    }}
                  >
                    <img
                      className={styles.chars}
                      src={girl}
                      alt="little girl"
                    />
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
