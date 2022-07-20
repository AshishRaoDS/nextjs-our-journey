/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import styles from "../../styles/PartOne.module.scss"
import { StateOfParts } from './Content'

type Props = {
  stateOfParts: StateOfParts,
  setStateOfParts: React.Dispatch<React.SetStateAction<StateOfParts>>
}

const PartTwo: React.FC<Props> = ({
  stateOfParts,
  setStateOfParts
}) => {
  return (
    <>
      <h3>Part 2: The one where I started giving a shit</h3>
      <div className={styles.gifContainer}>
        <img
          className={styles.gif}
          src="https://media.giphy.com/media/jRGGQMWvYvYraZ5kvI/giphy.gif"
          alt="Larry David" />
      </div>
      <p>
        So, here is where I decide to figure this damn human out. I was sure that something is great but
        I felt the whole picture was missing and that is when as usual, I  decided to write down my issues to figure it out.
        Guilty as charged, creepy as it sounds, I started writing about you.
      </p>
      <p>
        I wrote all the things I liked and things I found freakish about you.
        Who cares about glasses being broken in a TV show with the concern that someone has to
        clean it up? None other than this lady whom I call mine right now.
      </p>
      <p>
        We came across the topic of you being Hemophobic. I found it surprising that you had never really worked on it. I didn't know if it was too much to ask
        someone who I'm just getting to know to work on an issue of theirs. Well, I took a shot at asking it and you took it like a champ. Your issue with gradual
        exposure to bloody photos were, you'd end up finding gore ones at the sample place. So, I decided to be the filter. Fucking hell, I used to send you a bloody picture
        every night &#x1F602;. Without context that feels so weird. Weirder is the fact that when my exams came closer, we had to stop talking to each other for a while and
        I didn't want to discontinue what we started so I create a folder on Google drive with folders containing bloody pictures differentiated in rating from 1 to 10 with 10 being
        most horrifying. So, as you say, the first nice thing I did for you is send you a drive filled with blood. Bloody romantic aye!
      </p>
      <p>
        You being exceptionally emotional was concerning to me at the start but as time went on,
        I found that the emotions that you present comes from a genuine place and not from a desire to be
        dramatic. This was one area I was not entirely sure about myself. Could I handle an emotional person?
        Well, a better way of putting in case of you is, can I look at a situation from a perspective which naturally
        isn't mine, time and time again?
      </p>
      {
        !stateOfParts.partThree &&
        <button
          type='button'
          onClick={() => setStateOfParts({ ...stateOfParts, partThree: true })}
        >
          Read Part 3
        </button>
      }

    </>
  )
}

export default PartTwo