/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import styles from "../../styles/PartOne.module.scss"
import { StateOfParts } from './Content'

type Props = {
  stateOfParts: StateOfParts,
  setStateOfParts: React.Dispatch<React.SetStateAction<StateOfParts>>
}

const PartThree: React.FC<Props> = ({
  stateOfParts,
  setStateOfParts
}) => {
  return (
    <>
      <h3>Part 3: The one where you asked me out &#x1F60C;</h3>
      <div className={styles.gifContainer}>
        <img
          className={styles.gif}
          src="https://media.giphy.com/media/3oKIPbNb1vWdftiVLq/giphy.gif"
          alt="Micheal Scott" />
      </div>
      <p>
        My interest in you was building but I didn't really expect to ask you out anytime soon. People communicating
        over a network to communicating face to face can be vastly different.
        And then came that glorious moment. Details of which isn't best to be on a public site but
        it sure is a story worth telling some other time.
      </p>
      <p>
        One thing I am proud of is the fact that I asked you out on a call. I did it right.  If I was going to be
        rejected, I was going to be rejected in the right way too. I figured, it would be best to be told it rather than read it.
      </p>
      <p>
        Almost felt like I was committing a blunder when I was about to do it. Back then, I had nothing to lose.
        An act committed in the surety of nothing to lose now has given me everything which I can't imagine ever losing.
      </p>
      <p>
        It went over great and you said yes. We decided to date each other. I was not sure if you agreed to us virtually dating right now
        or if you agreed to go on a date with me in future. Like a dumb fuck, I decided to clarify it with you &#x1F602;
      </p>
      <p>
        This was the phase where I was more than happy about everything I came to know about you. A part of choosing whom to be with is about considering
        if you can live with their flaws and if they can with yours. I was sure, you could put up with my crap of being over practical about everything.
        And I respected you enough to allow you to express your emotions without me looking down it. I say that because that's a major issue with people who claim to be practical.
        We tend to believe in some level of superiority over those who take emotional decisions. Life isn't just about being robotically logical now is it?
        I wanted that opposing force. The force that tells me I'm being cold hearted. A force which I respect enough to listen and reconsider my opinions.
        And I had just found it. Now the time was to find out how right I was about the decision that I had just made.
      </p>
      {
        !stateOfParts.partFour &&
        <button
          type='button'
          onClick={() => setStateOfParts({ ...stateOfParts, partFour: true })}
        >
          Read Part 4
        </button>
      }
    </>
  )
}

export default PartThree