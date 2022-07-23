import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import styles from '../../styles/AuthForm.module.scss';
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import { useRouter } from "next/router"

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login } = useContext(AuthContext)

  const router = useRouter()

  const submitHandler = async (event: any) => {
    event.preventDefault();

    const email = emailRef?.current ? emailRef.current.value : "";
    const password = passwordRef?.current ? passwordRef.current.value : ""
    setIsLoading(true)
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUmyy0gKiFjtda_4qKIY79TNblHJv-C0g";

    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      const expirationTime = new Date((new Date().getTime() + (+response.data.expiresIn * 1000)))
      console.log(response.data)
      login(response.data.idToken, expirationTime.toISOString())
      router.replace("/home")
    } catch (error) {
      console.log(error)
      alert("Authentication failure")
    }
    setIsLoading(false)
  }


  return (
    <div className={styles.authWrapper}>
      <section className={styles.auth}>
        <p>Your path to re-live our journey through my eyes</p>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailRef} type='email' id='email' required />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' required />
          </div>
          <div className={styles.actions}>
            {!isLoading && <button>Login</button>}
            {isLoading && <Spinner animation="grow" variant="primary" />}
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
