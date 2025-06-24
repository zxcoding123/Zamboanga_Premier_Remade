
import './App.css'
import Navbar from './assets/Components/NavBar'
import LandingHeader from './assets/Components/LandingHeader'
import Services from './assets/Components/Services'
import AboutUs from './assets/Components/AboutUs'
import ThreeContent from './assets/Components/ThreeInfo'
import JobPlacement from './assets/Components/JobPlacement'
import Footer from './assets/Components/Footer';


"use client";

function App() {


  return (
    <div>

      <Navbar></Navbar>
      <LandingHeader></LandingHeader>
      <Services></Services>
      <AboutUs></AboutUs>
      <ThreeContent></ThreeContent>
      <JobPlacement></JobPlacement>
  <Footer></Footer>

    </div>
  )
}

export default App
