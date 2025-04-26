import { useState } from 'react'
import TextExpander from './TextExpander'

function App() {

  return (
    <>
     <TextExpander>
      Riding a bicycle is pure freedom! Imagine cruising down trails and feeling the wind in your hair. It's the stuff of childhood memories and exciting adventures, but it’s also a real way to travel and explore. People all around the world ride bikes to discover new places, stay healthy, and push the limits of their endurance and spirit.
     </TextExpander>

     <TextExpander collapseNumWords={20} expandButtonText='Show text' collapseButtonText='Collapse text' buttonColor='#ff6622'>
      Cycling takes some seriously impressive gear and teamwork between riders, engineers, and cycling enthusiasts. And while it’s not always easy (or cheap), the rewards are incredible. Think about the first time someone conquered a huge mountain climb or when bikes were designed to race faster than ever before.
     </TextExpander>

     <TextExpander expanded={true} className="box">
      Biking adventures have given us amazing memories and have inspired new generations to get out and explore the world on two wheels. Cycling is a pretty awesome thing to think about. Who knows what new paths and places we'll discover next!
     </TextExpander>
    </>
  ) 
}

export default App
