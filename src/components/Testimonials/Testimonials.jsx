import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="/New-years.jpg" alt="" />
                    <h4>Newyear</h4>
                    <p className={styles.bio}>Web Design</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur,  architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="/Ertyu-Alex.jpg" alt="" />
                    <h4>Ertyu Alex </h4>
                    <p className={styles.bio}>Senior</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur,  architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="/profile.jpg" alt="" />
                    <h4>Phoom 300x</h4>
                    <p className={styles.bio}>Full stack</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
