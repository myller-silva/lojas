import Link from "next/link";
import styles from "../../styles/login.module.css";

export default function Signup() {
  return (
    <div className={styles.login_box}>
      <h2>Sign Up</h2>
      <form>
        <div className={styles.user_box}>
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div className={styles.user_box}>
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div className={styles.user_box}>
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div className={styles.user_box}>
          <input type="password" name="" required="" />
          <label>Confirm Password</label>
        </div>

        <div className={styles.botoes}>
          <Link href={"#"}>Submit</Link>
          <Link href={"login"}>Login</Link>
        </div>
      </form>
    </div>
  );
}
