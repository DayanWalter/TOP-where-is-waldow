import styles from './Leaderboard.module.css';

export default function Leaderboard() {
  // Offline Example-Leaderboard
  const leaderboard = [
    { id: 1, name: 'Jeff', time: 12.6 },
    { id: 2, name: 'Dave', time: 13.75 },
    { id: 3, name: 'Michael', time: 26.45 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            <h1>Leaderboard</h1>
            <p>These are our best of the best:</p>
            <ol>
              {leaderboard.map(({ id, name, time }) => (
                <li key={id}>
                  {/* Insert component */} {name} in {time} seconds
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
