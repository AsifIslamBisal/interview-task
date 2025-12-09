import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import TopSlider from './components/TopSlider'
import Steps from './components/steps'
import Need from './components/Need'
import Icons from './components/Icons'
import Work from './components/Work'
import PostSlider from './components/PostSlider'
import Affordable from './components/Affordable'
import Contact from './components/Contact'
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";


function App() {

  const postData = [
  {
    id: 1,
    name: "Asif",
    handle: "@asif",
    date: "Jan 13, 2025",
    caption: "Another day. Another roast 😂",
    image: image4,
    likes: 1,
    comment: "Hicham: That headline redesign is such a glow-up. Way more engaging than the original! 🔥",
  },
  {
    id: 2,
    name: "Rahat",
    handle: "@rahat",
    date: "Feb 12, 2025",
    caption: "New roast project 🤯 Before ➡️ After",
    image: image2,
    likes: 1,
    comment: "GARY SZASZIK: So much better! Love that stack of 3 phones 🔥",
  },
  {
    id: 3,
    name: "Fahim",
    handle: "@fahim",
    date: "Jan 18, 2025",
    caption: "Do you think Duo needs an update? View profile on X",
    image: image3,
    likes: 1,
    comment: "Brandon: The after is definitely a nice step up from the original.",
  },
  {
    id: 3,
    name: "Al-Amin",
    handle: "@alamin",
    date: "Jan 18, 2025",
    caption: "Do you think Duo needs an update? View profile on X",
    image: image1,
    likes: 1,
    comment: "Brandon: The after is definitely a nice step up from the original.",
  },
];


  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <TopSlider></TopSlider>
      <ServicesSection></ServicesSection>
      <Steps></Steps>
      <Need></Need>
      <Icons></Icons>
      <Work></Work>
      <div className="bg-gray-50 min-h-screen mt-12">
      <h1 className="text-4xl font-bold text-center mb-8">Others loved it, and we'll<br/> make sure you'll love it too.</h1>
      <PostSlider data={postData} />
      </div>
      <Affordable></Affordable>
      <Contact></Contact>
      
      
    </div>
  )
}

export default App
