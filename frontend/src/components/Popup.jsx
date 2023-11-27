import rick from '../assets/statueofrickstart.png';
import morty from '../assets/mortystart.png';
import girl from '../assets/littlegirlstart.png';

import rickdone from '../assets/statueofrick.png';
import mortydone from '../assets/morty.png';
import girldone from '../assets/littlegirl.png';

import styles from './Popup.module.css';
import { useState } from 'react';

export default function Popup({ popupCoords, coords }) {
  const [foundChars, setFoundChars] = useState({
    rick: false,
    morty: false,
    girl: false,
  });

  const handleSubmit = async (selectedValue) => {
    try {
      const response = await fetch(
        `http://localhost:3000/chars/${selectedValue}`,
        {
          method: 'POST',
          body: JSON.stringify({
            name: `${selectedValue}`,
            x: coords.x,
            y: coords.y,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        console.error('Error:', response.statusText);
      }
      const json = await response.json();

      console.log(json);
      // If the response is a success
      if (json.message === 'Success') {
        // Set the found char to true
        setFoundChars({
          ...foundChars,
          [json.char.name]: true,
        });
      }
      console.log(foundChars);
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
                    {!foundChars.rick ? (
                      <img className={styles.chars} src={rick} alt="rick" />
                    ) : (
                      <img className={styles.chars} src={rickdone} alt="rick" />
                    )}
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
                    {!foundChars.morty ? (
                      <img className={styles.chars} src={morty} alt="morty" />
                    ) : (
                      <img
                        className={styles.chars}
                        src={mortydone}
                        alt="morty"
                      />
                    )}
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
                    {!foundChars.girl ? (
                      <img className={styles.chars} src={girl} alt="girl" />
                    ) : (
                      <img className={styles.chars} src={girldone} alt="girl" />
                    )}
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
