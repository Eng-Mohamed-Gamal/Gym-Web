import Footer from './Components/Footer'
import Nav from './Components/Nav'
import StageMain from './Components/StageMain'
import './globals.css'
import Home from './page'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav></Nav>
        <StageMain></StageMain>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
