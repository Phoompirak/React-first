import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <a href="https://youtu.be/fqI1o4eBe0M" target='_blank'>
              <img src='/Prank-friends.png' alt="" />
            </a>
          </Tilt>
          <p>Project Coding tutorial</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            {/* <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" /> */}
            <a href="https://pok-mon-restful-api.onrender.com/" target='_blank'>
              <img src='/poke.png' alt="" />
            </a>
          </Tilt>
          <p>Project Web Pokemon Information</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src='/models.png' alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <a href="https://youtu.be/jVJyOcyO7Qw" target='_blank'>
              <img src='/animation.png' alt="" />
            </a>
          </Tilt>
          <p>Project Animation Competition</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <iframe src="https://drive.google.com/file/d/1MUCwhzqiqwgNu3t9JElRPfMGswJwhvJg/preview" width="640" height="480" allow="autoplay"></iframe>
            {/* <img src="https://drive.google.com/file/d/1MUCwhzqiqwgNu3t9JElRPfMGswJwhvJg/preview" alt="" /> */}
          </Tilt>
          <p>Project create short film</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src="https://media1.tenor.com/m/iAy-KwJB1DkAAAAC/typing.gif" alt="" />
          </Tilt>
          <p>Project Typing 50wpm</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
