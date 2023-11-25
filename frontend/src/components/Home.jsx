import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.outerbox}>
        <div className={styles.innerbox}>
          <div className={styles.innerboxcontent}>
            <h1>WELCOME!</h1>
            <p>This is PiXeLmAnIa!!!</p>
            <p>See how crazy &quot;PixelMania&quot; is written?</p>
            <p>It&apos;s going to be awesome, just do these things:</p>
            <ul>
              <li>Search for the characters</li>
              <li>Click the characters</li>
              <li>Be as fast as possible</li>
              <li>
                Enter the &quot;HALL OF FAME&quot;, or as we call it: The
                Leaderboard
              </li>
            </ul>
            <p>Have fun, traveler!</p>

            <Link to={`/picture`}>
              <button>START</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
