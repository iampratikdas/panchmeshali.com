import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
export default function nav() {
  return (
    <div> 
  <div className={styles.div_nav_styling}>
  <ul className={styles.nav_styling}> 
  <li className={styles.nav_styling_inner}><a href="../home">Home</a></li>
  <li className={styles.nav_styling_inner}><a href="../about">About</a></li>
  <li className={styles.nav_styling_inner}><a href="../contactus">Contact Us</a></li>
 
  </ul>
  </div>

    </div>

  )
  }