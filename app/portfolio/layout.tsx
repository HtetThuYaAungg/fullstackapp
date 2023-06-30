import React from 'react'
import styles from './page.module.css'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}



const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>
          <h1 className={styles.mainTitle}>Our Works</h1>
          {children}
    </div>
  )
}

export default Layout
