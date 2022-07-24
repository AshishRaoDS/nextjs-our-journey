import React, { useState, useRef, useEffect, useContext } from 'react'
import styles from '../../styles/Content.module.scss'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import PartThree from './PartThree'
import PartFour from './PartFour'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import PartFive from './PartFive'
import { useRouter } from 'next/router'
import AuthContext from '../../store/auth-context'

export type StateOfParts = {
  partOne: boolean;
  partTwo: boolean;
  partThree: boolean;
  partFour: boolean;
}

const Content: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext)

  const router = useRouter()

  const [stateOfParts, setStateOfParts] = useState<StateOfParts>({
    partOne: false,
    partTwo: false,
    partThree: false,
    partFour: false,
  })

  const partFourRef = useRef<any>(null)

  const scrollTPartFourHandler = () => {
    setStateOfParts({
      partOne: true,
      partTwo: true,
      partThree: true,
      partFour: true,
    })
  }

  const scrollToView = () => {
    partFourRef.current && partFourRef.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login")
    }
  }, [isLoggedIn, router])

  useEffect(() => {
    if (partFourRef.current) {
      scrollToView();
    }
  }, [partFourRef, stateOfParts]);

  return (
    <div className={styles.container}>
      {
        !stateOfParts.partFour &&
        <button
          onClick={scrollTPartFourHandler}
          type="button"
          className={styles.scrollToBottom}
        >
          <FontAwesomeIcon
            className={styles.downArrow}
            icon={faArrowDown} />
        </button >
      }
      <Image
        width={169}
        height={200}
        className={styles.dancingMinion}
        src="https://media.giphy.com/media/3cKaKpl2OzqpfSPdUF/giphy.gif"
        alt="Dancing Minion" />
      <h2 className={styles.title}>Hey there lady!</h2>
      <p>
        We have quite a lot of things to discuss about, but for a change, it will just be me speaking this time, unlike usual.
        This day, your day! Most people secretly wait for it but you openly do &#x1F602;. I thought it would be interesting to
        reminisce our past together. Our journey so far has been quite interesting. We have seen a lot of speed bumps along the way.
        I think, the tougher it got, closer we got by dealing with it  and further consolidating the idea of US. Making room for each
        other for more than 10 months now, it is about time we re-visited our journey. So, put on your shoes because it is going to be a long walk
        down this memory lane.
      </p>
      {
        stateOfParts.partOne ?
          <PartOne
            stateOfParts={stateOfParts}
            setStateOfParts={setStateOfParts}
          /> :
          <button
            type='button'
            onClick={() => setStateOfParts({ ...stateOfParts, partOne: true })}
          >
            Read Part 1
          </button>
      }
      {
        stateOfParts.partTwo &&
        <PartTwo
          stateOfParts={stateOfParts}
          setStateOfParts={setStateOfParts}
        />
      }
      {
        stateOfParts.partThree &&
        <PartThree
          stateOfParts={stateOfParts}
          setStateOfParts={setStateOfParts}
        />
      }
      {
        stateOfParts.partFour &&
        <PartFour
          partFourRef={partFourRef}
        />
      }
      <PartFive />
    </div >
  )
}

export default Content