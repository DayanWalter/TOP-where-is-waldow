import styles from './Popup.module.css';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import CharacterForm from './CharacterForm';
import UserForm from './UserForm';

export default function Popup({ popupCoords, coords }) {
  const [foundChars, setFoundChars, time, setTime] = useOutletContext();
  const popupPosition = {
    left: popupCoords.x,
    top: popupCoords.y,
  };

  return (
    <div className={styles.container} style={popupPosition}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            {/* If rick OR morty OR the girl ist NOT found, display character form */}
            {!foundChars.rick || !foundChars.girl || !foundChars.morty ? (
              // Display "Character form"
              <CharacterForm popupCoords={popupCoords} coords={coords} />
            ) : (
              // ELSE Display "User form"
              <UserForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
