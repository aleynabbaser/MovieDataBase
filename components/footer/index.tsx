import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'


function Footer() {
  return (
    <footer className={styles.footer}>
      Made with by &nbsp;
      <Link href="https://tr.pinterest.com/" target="_blank">
        Aleyna Berrak Başer

      </Link>
    </footer>
  );
}

export default Footer;
