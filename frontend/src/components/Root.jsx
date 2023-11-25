import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';

export default function Root() {
  return (
    <div className={styles.site}>
      {/* Root styles.site */}
      <header className={styles.header}>Root styles.header</header>
      <main className={styles.main}>
        <Outlet />
        Root styles.main
      </main>
      <footer className={styles.footer}>Root styles.footer</footer>
    </div>
  );
}
