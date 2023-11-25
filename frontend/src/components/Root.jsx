import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';

export default function Root() {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <button>Restart</button>
        <h1>PixelMania</h1>
        <button>Leaderboard</button>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <h2> Synth©yrax</h2>
      </footer>
    </div>
  );
}
