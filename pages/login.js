import Link from "next/link";
import styles from '../styles/login.module.css'
export default function Login() {
  return ( 
    <div className={styles.center}>

    <h1>Sign in</h1>
      <div>
        <input placeholder="email" type="text"></input>
      </div>
      <div>
        <input placeholder="password" type="password"></input>
      </div>
      <div>
        <Link href={"/"}> Voltar</Link>
      </div>

    </div> 
  );
}
