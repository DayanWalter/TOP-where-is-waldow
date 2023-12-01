import { useEffect, useState } from 'react';
import styles from './Leaderboard.module.css';

export default function Leaderboard() {
  // Fetch data from server
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const response = await fetch(`http://localhost:3000/leaderboard`);
        if (!response.ok) {
          console.error('Error:', response.statusText);
        }

        const users = await response.json();

        setUser(users);
        setError(null);
      } catch (error) {
        setError(error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getLeaderboard();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            <h1>Leaderboard</h1>
            <p>These are our best of the best:</p>

            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the data - ${error}`}</div>
            )}
            {user && (
              <ol>
                {user
                  // Sort entries from fastest to slowest
                  .sort((a, b) => a.elapsed - b.elapsed)
                  // Just take the first 5 entries
                  .slice(0, 5)
                  // Display the first entries
                  .map(({ _id, user, elapsed }) => (
                    <li key={_id}>
                      {/* Map through every entry: Insert component */}
                      {user} in{' '}
                      {`${new Date(elapsed).getSeconds()},${new Date(
                        elapsed
                      ).getMilliseconds()}`}{' '}
                      seconds
                    </li>
                  ))}
              </ol>
            )}
            <br />
            <p>Are you even on the list?!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
