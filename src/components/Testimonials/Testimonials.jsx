import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://scontent.fnak1-1.fna.fbcdn.net/v/t39.30808-1/453433879_1008671377427011_1868941407820774855_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=GCuXU6xexSkQ7kNvgHtQjo_&_nc_oc=Adj0v0yZU0ymlK_M-VDTzIy1XvOlxqc3qXu-6y4gIBILHFO-D6-bN5wyxlgKwgQRTjk&_nc_zt=24&_nc_ht=scontent.fnak1-1.fna&_nc_gid=AGIM0sYfB-Lm7zmpQJiPcom&oh=00_AYDQN3I2Z-uCsMwyse99M0gpB9NkClQHu939htkMMZ6Hug&oe=6766858A" alt="" />
                    <h4>Newyear</h4>
                    <p className={styles.bio}>Web Design</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur,  architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://scontent.fnak1-1.fna.fbcdn.net/v/t39.30808-6/429677884_778318684150851_6035195210051836142_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=E5RC21G3uz4Q7kNvgFXgrES&_nc_oc=Adgt0XY7Ma2DdO5GPM9k5Ih4WgVX539-FCpe6fzXzThGlfNMMEN3-TCEiCau-eJkUmA&_nc_zt=23&_nc_ht=scontent.fnak1-1.fna&_nc_gid=AXN0jySGdys1ERxDN4lVl5b&oh=00_AYAbSsSW5UpIKM6v_W08AMMz2FQiY25cQAiWvQcGA-9heA&oe=67667FA8" alt="" />
                    <h4>Ertyu Alex </h4>
                    <p className={styles.bio}>Senior</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur,  architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://scontent.fnak1-1.fna.fbcdn.net/v/t39.30808-6/460634085_383571034795087_3449167837828296833_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pB1LXp5Oha0Q7kNvgFtnlaO&_nc_oc=AdgE2oygKF1WErs_cekNWKErSS26ueMZtfxbzgKSJ4pkaZjUFrsgmCWKgWHKUzmsDHA&_nc_zt=23&_nc_ht=scontent.fnak1-1.fna&_nc_gid=AGa9JS1B1b8j-5ZWXKLDDSu&oh=00_AYC8pyGQRgYQFf5K6bEMjpUfDK8pNUVY3rEosROgcMXxNQ&oe=67668809" alt="" />
                    <h4>Phoom 300x</h4>
                    <p className={styles.bio}>Full stack</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
