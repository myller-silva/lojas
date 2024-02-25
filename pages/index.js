import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <Link href="/login">Sign in</Link>
      </div>
      <div>
        <Link href="/signup">Sign up</Link>
      </div>
    </div>
  );
}
