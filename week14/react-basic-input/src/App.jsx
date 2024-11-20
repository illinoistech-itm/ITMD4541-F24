import { useState } from 'react'
import './App.css'
import { InputArea } from './components/InputArea'
import { Box } from './components/Box'

function App() {
  const [text, setText] = useState('Hello, World!');
  const [color, setColor] = useState('#ff0000');

  return (
    <div id='app'>
      <InputArea text={text} color={color} handleChangeText={setText} handleChangeColor={setColor} />
      <Box text={text} color={color} />
      <Box text={text} color={color} />
      <Box text={text} color={color} />
    </div>
  )
}

export default App
