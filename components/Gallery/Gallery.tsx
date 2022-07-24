/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'react-bootstrap'
import styles from "../../styles/Gallery.module.scss"
import { drawings } from '../../store/drawingDetails'
import { myWritings } from '../../store/myWritingDetails'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/router"
import AuthContext from '../../store/auth-context'

type Props = {}

const Gallery: React.FC<Props> = () => {
  const { isLoggedIn } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login")
    }
  }, [isLoggedIn, router])

  return (
    <div className={styles.galleryContainer}>
      <section className={styles.carouselSection}>
        <h3>Your drawings which I can't appreciate enough</h3>
        <div className={styles.carouselContainer}>
          <Carousel>
            {
              drawings.map((drawing: any, index: number) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      key={index}
                      className="d-block w-100"
                      src={`drawings/drawing${index + 1}.jpg`}
                      data-src={`drawings/drawing${index + 1}.jpg`}
                      alt="slides"
                    />
                    <Carousel.Caption>
                      <p>{drawing.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
      </section>

      <section className={styles.carouselSection}>
        <h3>A few of my writings where I made an effort to appreciate</h3>
        <div className={styles.carouselContainer}>
          <Carousel>
            {
              myWritings.map((writing: any, index: number) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      key={index}
                      className="d-block w-100"
                      src={`myWritings/writing${index + 1}.jpg`}
                      data-src={`myWritings/writing${index + 1}.jpg`}
                      alt="slides"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
      </section>
      <section className={styles.signatureContainer}>
        <h3>A moment that we really cherish</h3>
        <div className={styles.signature}>
          <img src="ourThings/ourSignature.jpg" alt="Our signatures" />
        </div>
      </section>
      <section className={styles.ourThingsContainer}>
        <h3>25th one which I've conveniently left out</h3>
        <div className={styles.picHolder}>
          <img src="ourThings/ourRules.jpg" alt="Our signatures" />
        </div>
      </section>
      <section className={styles.ourThingsContainer}>
        <h3>A writing that was a pleasure to write</h3>
        <div className={styles.picHolder}>
          <img src="ourThings/discovery.jpg" alt="Our signatures" />
        </div>
      </section>
      <section className={styles.ourPicContainer}>
        <h3>US :)</h3>
        <div className={styles.ourPic}>
          <img src="ourThings/ourPic.jpg" alt="Our signatures" />
        </div>
      </section>
      <p className={styles.toBeContinued}>Many more memorable things to be added as our journey goes ahead...</p>
    </div>
  )
}

export default Gallery