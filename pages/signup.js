import Link from "next/link";
import styles from "../styles/login.module.css";

export default function Signup() {
  return (
    <div className={styles.center}>
      <h1>Sign Up</h1>
      <div>
        <input placeholder="name" type="text"></input>
      </div>
      <div>
        <input placeholder="CPF" type="text"></input>
      </div>
      <div>
        <input placeholder="email" type="text"></input>
      </div>
      <div>
        <input placeholder="password" type="password"></input>
      </div>
      <div>
        <Link href={"/"}> voltar</Link>
      </div>
    </div>
  );
}
