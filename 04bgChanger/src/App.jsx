import { useState } from 'react'
import Button from './Button'
import './App.css'

function App() {

  const [color, setColor] = useState('cyan');


  return (
    <>
    <div className = 'main' style={{backgroundColor : color}}>


      <Button colour = 'Red' onClick = {() => setColor('red')}/>
      <Button colour = 'Green' onClick = {() => setColor('green')}/>
      <Button colour = 'Blue' onClick = {() => setColor('blue')}/>
      <Button colour = 'Yellow' onClick = {() => setColor('yellow')}/>
      <Button colour = 'Gray' onClick = {() => setColor('gray')}/>
      <Button colour = 'Lavender' onClick = {() => setColor('lavender')}/>
      <Button colour = 'Olive' onClick = {() => setColor('Olive')}/>
      <Button colour = 'Pink' onClick = {() => setColor('Pink')}/>
      <Button colour = 'Purple' onClick = {() => setColor('Purple')}/>
      <Button colour = 'White' onClick = {() => setColor('White')}/>
      <Button colour = 'Black' onClick = {() => setColor('Black')}/>

    </div>
    </>
  )

}

export default App
