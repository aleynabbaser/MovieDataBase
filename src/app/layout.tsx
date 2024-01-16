import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import "../styles/reset.css"
import './global.css'
import Footer from '../../components/footer'
import Header from '../../components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aleyna Next',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
