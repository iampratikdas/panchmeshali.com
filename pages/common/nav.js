import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/Home.module.css';
import '/styles/Home.module.css';
export default function Nav() {
  return (
  <div className="navDiv" > 
  <div className={styles.div_nav_styling}>
  <ul className={styles.nav_styling}> 
  <li className={styles.nav_styling_inner}><a className="aTag" href="../home">Home</a></li>
  <li className={styles.nav_styling_inner}><a className="aTag" href="../about">About</a></li>
  <li className={styles.nav_styling_inner}><a className="aTag" href="../contactus">Contact Us</a></li>
 
  </ul>
  </div>

    </div>

  )
  }