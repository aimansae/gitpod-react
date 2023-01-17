import React, {useState} from 'react'

function Colorize() {
    const [color, setColor] = useState('red');

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return random
    }
    const colorChange = () => {
        const RandomColor = getRandomColor()
        console.log('Color change with', RandomColor);
        setColor(RandomColor)
    }

  return (
    <div className='colorizer'>
    <div className='box' style={{backgroundColor: color}}>
        {color}</div>
        <button onClick = {colorChange}>Change Color</button>
        
        
        </div>
  )
}

export default Colorize