import React, { useState, useEffect, useContext } from 'react'
import styles from "../../styles/Header.module.scss"
import Logo from "../../assets/images/header-logo.png"
import { Dropdown, Spinner } from 'react-bootstrap'
// import AuthContext from '../../store/auth-context'
import moment from "moment"
import { useRouter } from "next/router"
import Image from "next/image"


const Header: React.FC = () => {
  const [isShrunk, setShrunk] = useState(false);
  const [dateSinceWeStartedOurRelationship, setDateSinceWeStartedOurRelationship] = useState<string>("")

  // const { isLoggedIn, logout } = useContext(AuthContext)

  const router = useRouter()

  const dateCalculator = () => {
    const date = moment("20210829", "YYYYMMDD").fromNow(true)
    setDateSinceWeStartedOurRelationship(date)
  }

  const logoutHandler = () => {
    // logout()
    // navigate("/login", { replace: true })
    router.replace("/login")

  }

  useEffect(() => {
    dateCalculator()
  }, [])


  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`${styles.header} ${isShrunk ? styles.headerOnScroll : ""}`}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="Cartoon monster with Tanaya's name" />
      </div>
      {/* {isLoggedIn ? */}
      <div className={styles.navigationContainer}>
        <div className={styles.ourTimeWrapper}>
          <Spinner animation="border" size="sm" style={{ marginTop: "8px", fontSize: "15px" }} />
          <p className={styles.ourTime}>Our valuable time together - {dateSinceWeStartedOurRelationship}</p>
        </div>
        <button onClick={() => router.push("/home")} className={styles.headerNavigationCta}>Home</button>
        <button onClick={() => router.push("/gallery")} className={styles.headerNavigationCta}>Gallery</button>
        <button onClick={logoutHandler} className={styles.headerNavigationCta}>Logout</button>
        <Dropdown className={styles.dropdown}>
          <Dropdown.Toggle id="dropdown-basic">
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => router.push("/home")}>Home</Dropdown.Item>
            <Dropdown.Item onClick={() => router.push("/gallery")}>Gallery</Dropdown.Item>
            <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* :
        <hr style={{ marginTop: "-1px" }} />
      } */}
    </div>
  )
}

export default Header