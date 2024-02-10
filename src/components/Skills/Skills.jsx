import React from 'react'
import styles from './Skills.module.css'
import { IoLogoJavascript } from 'react-icons/io';
import { SiArduino } from "react-icons/si";
import { FaPython, FaReact } from 'react-icons/fa6'
import { SiAdobepremierepro } from "react-icons/si";

function Skills() {
    return (
        <div className={styles.skills_con}>
            <h3 className={styles.skills_title}>My skill Set</h3>
            <ul className={styles.skills_list}>
                <li>
                    <FaPython />
                </li>
                <li>
                    <IoLogoJavascript />
                </li>
                <li>
                    <FaReact />
                </li>
                <li>
                    <SiArduino />
                </li>
                <li>
                    <SiAdobepremierepro />
                </li>
            </ul>
        </div>
    )
}

export default Skills
