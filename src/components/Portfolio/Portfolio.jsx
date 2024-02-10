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
            <img src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src="https://media1.tenor.com/m/cX92mi1p-NYAAAAd/coding-anime.gif" alt="" />
          </Tilt>
          <p>Project Hello world!</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src="https://media1.tenor.com/m/hmDMrE1yMAkAAAAC/when-the-coding-when-the.gif" alt="" />
          </Tilt>
          <p>Project cheating on exam</p>
        </div>
        <div className={styles.port_item}>
          <Tilt transitionSpeed={2500} tiltReverse={true}>
            <img src="https://media1.tenor.com/m/iAy-KwJB1DkAAAAC/typing.gif" alt="" />
          </Tilt>
          <p>Project Typing 38wpm</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
