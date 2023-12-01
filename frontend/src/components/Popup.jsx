import rick from '../assets/statueofrickstart.png';
import morty from '../assets/mortystart.png';
import girl from '../assets/littlegirlstart.png';

import rickdone from '../assets/statueofrick.png';
import mortydone from '../assets/morty.png';
import girldone from '../assets/littlegirl.png';

import styles from './Popup.module.css';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

export default function Popup({ popupCoords, coords }) {
  const navigate = useNavigate();
  // State from root
  const [foundChars, setFoundChars, time, setTime] = useOutletContext();
  const handleSubmit = async (selectedValue) => {
    // POST the position and the name of the selectedCharacter(selectedValue)
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
          // Keep the found chars
          ...foundChars,
          // Set the recently found char to true
          [json.char.name]: true,
        });
      }
    } catch (error) {
      console.error('Error', error);
    }
  };
  // Display the found chars
  console.log(foundChars);

  const popupPosition = {
    left: popupCoords.x,
    top: popupCoords.y,
  };

  const handleAddName = (e) => {
    const newTime = {
      ...time,
      user: e.target.value,
    };
    setTime(newTime);
  };

  console.log(time);

  const handleUserSubmit = async () => {
    // POST the position and the name of the selectedCharacter(selectedValue)
    try {
      const response = await fetch(`http://localhost:3000/leaderboard`, {
        method: 'POST',
        body: JSON.stringify({
          start: time.start,
          end: time.end,
          user: time.user,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Error:', response.statusText);
      }
      const json = await response.json();
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div className={styles.container} style={popupPosition}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            {/* If rick OR morty OR the girl ist NOT found, display character form */}
            {!foundChars.rick || !foundChars.girl || !foundChars.morty ? (
              // Character form
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
                      {/* Change the colour of the picture */}
                      {!foundChars.rick ? (
                        <img className={styles.chars} src={rick} alt="rick" />
                      ) : (
                        <img
                          className={styles.chars}
                          src={rickdone}
                          alt="rick"
                        />
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
                      {/* Change the colour of the picture */}
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
                      {/* Change the colour of the picture */}
                      {!foundChars.girl ? (
                        <img className={styles.chars} src={girl} alt="girl" />
                      ) : (
                        <img
                          className={styles.chars}
                          src={girldone}
                          alt="girl"
                        />
                      )}
                    </button>
                  </li>
                </ul>
              </form>
            ) : (
              // Enter name form
              <form>
                <label htmlFor="name">Enter Name:</label>
                <input type="text" id="name" onChange={handleAddName} />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    // Save user to db
                    handleUserSubmit();
                    // wait 500ms, before moving to leaderboard
                    setTimeout(() => {
                      navigate('/leaderboard');
                    }, 500);
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
