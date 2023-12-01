import styles from './CharacterForm.module.css';

import { useNavigate, useOutletContext } from 'react-router-dom';

export default function UserForm() {
  const [foundChars, setFoundChars, time, setTime] = useOutletContext();
  const navigate = useNavigate();
  const handleAddName = (e) => {
    const newTime = {
      ...time,
      user: e.target.value,
    };
    setTime(newTime);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error('Error', error);
    }
    // wait 500ms, before moving to leaderboard
    setTimeout(() => {
      navigate('/leaderboard');
    }, 500);
  };
  return (
    <form>
      <label htmlFor="name">Enter Name:</label>
      <input type="text" id="name" onChange={handleAddName} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
