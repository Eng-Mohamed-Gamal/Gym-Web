import Footer from './Components/Footer'
import Nav from './Components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
