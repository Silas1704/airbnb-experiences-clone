import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {
const cards=data.map(item=>{
  return(
    <Card
      key={item.id}
      item={item}
    />
  )
})
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
      <section className="card-list">
        {cards}
      </section>
    </>
  )
}

export default App
