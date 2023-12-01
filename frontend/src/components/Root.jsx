import { Link, Outlet } from 'react-router-dom';
import styles from './Root.module.css';
import { useEffect, useState } from 'react';

import rick from '../assets/statueofrickstart.png';
import morty from '../assets/mortystart.png';
import girl from '../assets/littlegirlstart.png';

import rickdone from '../assets/statueofrick.png';
import mortydone from '../assets/morty.png';
import girldone from '../assets/littlegirl.png';

export default function Root() {
  const [time, setTime] = useState({
    start: null,
    end: null,
    elapsed: null,
    user: null,
  });

  const [foundChars, setFoundChars] = useState({
    rick: false,
    morty: false,
    girl: false,
  });

  // Set end time after every char is found
  useEffect(() => {
    if (
      foundChars.rick === true &&
      foundChars.girl === true &&
      foundChars.morty === true
    ) {
      console.log('All done! STOP TIME');
      setTime({
        ...time,
        end: Date.now(),
      });
    }
  }, [foundChars.rick, foundChars.girl, foundChars.morty]);

  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <Link to={`/`}>
          <button>Restart</button>
        </Link>

        <h1>PixelMania</h1>
        <div className={styles.images}>
          {!foundChars.rick ? (
            <img className={styles.chars} src={rick} alt="rick" />
          ) : (
            <img className={styles.chars} src={rickdone} alt="rick" />
          )}
          {!foundChars.morty ? (
            <img className={styles.chars} src={morty} alt="morty" />
          ) : (
            <img className={styles.chars} src={mortydone} alt="morty" />
          )}
          {!foundChars.girl ? (
            <img className={styles.chars} src={girl} alt="girl" />
          ) : (
            <img className={styles.chars} src={girldone} alt="girl" />
          )}
        </div>

        <Link to={`/leaderboard`}>
          <button>Leaderboard</button>
        </Link>
      </header>
      <main className={styles.main}>
        <Outlet context={[foundChars, setFoundChars, time, setTime]} />
      </main>
      <footer className={styles.footer}>
        <h2> Synth©yrax</h2>
      </footer>
    </div>
  );
}
