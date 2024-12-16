import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'

function Servies() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_item}>
            <FaCode />
            <h4>Web Developer</h4>
            <p>ออกแบบและสร้างหน้าเว็บแบบ <b>static page</b> หรือ <b>web server page</b> ทำ3Dโมเดล</p>
        </div>
        <div className={styles.services_item}>
            <FaPaintbrush />
            <h4>Editor video</h4>
            <p>
              ตัดต่อวิดีโอความยาว <b>8-15นาที</b>
            สไตล์Jump cut, Montage, Punch Cut
            ตัดแต่งเสียง
            เลือกตัวอย่างการตัดต่อได้</p>
        </div>
        <div className={styles.services_item}>
            <FaDesktop />
            <h4>Presentation Slide</h4>
            <p>ค้นคว้าข้อมูล เพื่อนำมาทำสไลด์พรีเซนต์เนื้อหาต่างๆ</p>
        </div>
      </div>
    </div>
  )
}

export default Servies
