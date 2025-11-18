import React from 'react'
import { TextRevealCard } from './ui/TextReaveal'

const Clients = () => {
  return (
    <div id="clients" className="flex items-center justify-center w-full mb-20">
        <TextRevealCard 
        text="You Know the business"
        revealText="I know the chemistry" />
    </div>
  )
}

export default Clients