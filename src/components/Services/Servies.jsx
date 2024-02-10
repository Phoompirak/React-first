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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim repudiandae delectus, reiciendis id temporibus autem, alias vero architecto odio veniam atque, natus rerum? Ducimus sapiente provident mollitia est odit!</p>
        </div>
        <div className={styles.services_item}>
            <FaPaintbrush />
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim repudiandae delectus, reiciendis id temporibus autem, alias vero architecto odio veniam atque, natus rerum? Ducimus sapiente provident mollitia est odit!</p>
        </div>
        <div className={styles.services_item}>
            <FaDesktop />
            <h4>Web Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim repudiandae delectus, reiciendis id temporibus autem, alias vero architecto odio veniam atque, natus rerum? Ducimus sapiente provident mollitia est odit!</p>
        </div>
      </div>
    </div>
  )
}

export default Servies
