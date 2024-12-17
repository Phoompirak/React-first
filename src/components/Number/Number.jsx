import React from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'


function Number() {
    return (
        <div className={styles.number_con}>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={300} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Editor video Experiance</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={9400} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Youtube Channel</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Graphic motion video</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={20} duration={5} /> : null}+
                            </div>
                        )}
                    </VisibilitySensor>
                </h3>
                <p>Tiktok video</p>
            </div>

        </div>
    )
}

export default Number
