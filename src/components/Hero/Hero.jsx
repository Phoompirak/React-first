import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it’s me</p>
            <h3 className={styles.text_2}>
              <p>Phoom</p><p>pirak</p>&nbsp;<p>Karajak</p>
            </h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: '10px' }}>I'm a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Developer',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Editor',
                  2000,
                  'Youtuber',
                  2000,
                ]}
                speed={30}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>

              นักสร้างสรรค์ดิจิทัลพัฒนาทักษะ ไม่ว่าจะเป็น<b>การเขียนโค้ดที่ซับซ้อน</b>หรือการ<b>สร้างภาพกราฟิก</b>ที่น่าประทับใจ พร้อมเดินทางสู่โลกแห่งนวัตกรรมไร้ขีดจำกัด ✨🚀
              มุ่งมั่น  และก้าวไปข้างหน้าด้วยความมุ่งมานะและ<b>ความฝันอันยิ่งใหญ่</b>ครับ
            </p>
            <ul className={styles.hero_social}>
              <li><a href='https://github.com/Phoompirak' target='_blank'><FaGithub /></a></li>
              <li><a href="https://www.youtube.com/channel/UCDcYVq3Jhu-Zv1S9FYRV2SQ"><FaYoutube /></a></li>
              <li><a href="https://www.facebook.com"><FaFacebookF /></a></li>
            </ul>
          </div>

          <div>
            <Tilt transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_img}></div>
            </Tilt>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
