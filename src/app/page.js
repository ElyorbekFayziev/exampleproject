import Navbar from '../components/navbar'
import Head from '../components/head'
import About from '../components/about'
import Service from '../components/service'
import Portfolio from '../components/portfolio'
import Pricing from '../components/pricing'
import Call from '../components/call'
import Footer from '../components/footer'

export default function Home() {
  return (
  <>
  <Navbar></Navbar>
  <Head></Head>
  <About></About>
  <Service></Service>
  <Portfolio></Portfolio>
  <Pricing></Pricing>
  <Call></Call>
  <Footer></Footer>
  </>
  )
}
