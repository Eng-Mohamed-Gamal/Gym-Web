import Footer from './Components/Footer'
import Nav from './Components/Nav'
import './globals.css'





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
