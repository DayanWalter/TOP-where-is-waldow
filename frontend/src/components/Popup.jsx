import styles from './Popup.module.css';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import CharacterForm from './CharacterForm';

export default function Popup({ popupCoords, coords }) {
  const navigate = useNavigate();
  const [foundChars, setFoundChars, time, setTime] = useOutletContext();
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
              <CharacterForm popupCoords={popupCoords} coords={coords} />
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
