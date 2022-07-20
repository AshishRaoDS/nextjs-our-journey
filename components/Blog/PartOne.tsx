/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from "../../styles/PartOne.module.scss";
// import callRecording from "../../assets/audio/call-recording.mp3";
import { StateOfParts } from './Content';
import Image from "next/image"

type Props = {
  stateOfParts: StateOfParts,
  setStateOfParts: React.Dispatch<React.SetStateAction<StateOfParts>>
}

const PartOne: React.FC<Props> = ({
  stateOfParts,
  setStateOfParts
}) => {
  return (
    <>
      <h3>Part 1: The One where we didn't give a shit about each other</h3>
      <div className={styles.gifContainer}>
        <img
          className={styles.gif}
          src="https://media.giphy.com/media/J0nrGGtpEvZqo/giphy.gif"
          alt="Samuel Jackson saying he doesn't give a damn" />
      </div>
      <p>Remember our first call regarding karma and some other shit? You had just read some book and
        you were going on and on about it. It was quite interesting but I didn't expect it to last.
        Couldn't have possibly thought that it was going to act as an onset for something worthwhile.
      </p>
      <p>I wouldn't blame you if you got annoyed with the fact that I used to stop using my phone past 10.
        As usual, I have my priorities straight and back then, building a routine topped every other thing in this world.
        I wasn't going to let some stranger sitting in some far off city, ruin my plans. And I made sure of that. I guess, thank you
        for not getting offended? but you used to get some weird satisfaction in telling me I'm late. I used to find that weird
        in the beginning but some how I started enjoying the fact that you used to enjoy the fact that I was being late? &#x1F643;
        I guess, that is when the downfall began.
      </p>
      <p>
        You opened upto me far quicker than I did. Yet, it didn't feel like you made it an obligation for me to
        open up. I took my time to do so and by the time I was ready to go there, I had a sense of having known you for
        years together.
      </p>
      <p>
        We discussed everything. From our interests to our deepest insecurities. We clearly saw that our world view didn't perfectly
        match each others. That didn't stop us from expressing our own views or accepting the front person's without necessarily agreeing
        with it. I think, that foundation still plays a huge part in us acknowledging the fact that my truth doesn't have to be yours and yours doesn't have
        to be mine.
      </p>
      <p>
        You thought it was significant to wish me for friendship day. I didn't really care but for some reason, I did that day after you wished.
        Some stranger cared enough to wake up at 6 o'clock to wish me to make sure that she was the first one to do so.
      </p>
      <div className={styles.audioContainer}>
        <audio controls>
          {/* <source src={callRecording} type="audio/mpeg" /> */}
          Your browser does not support the audio element.
        </audio>
      </div>
      <p>No, your voice doesn't sound bad in that! But I sound super awkward as I had no clue how the fuck to react to that. I wished you back as quickly as
        I could &#x1F606;.
      </p>
      <p>
        That is when it clicked. This lady is strange as fuck! Something is really weird about her and possibly, quite possibly, I just might like it.
      </p>
      {
        !stateOfParts.partTwo &&
        <button
          type='button'
          onClick={() => setStateOfParts({ ...stateOfParts, partTwo: true })}
        >
          Read Part 2
        </button>
      }

    </>
  )
}

export default PartOne