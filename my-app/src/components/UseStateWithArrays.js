import React, {useState} from 'react'


function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3,4,5])
    const addNums =  () => {
        setNums([...nums, nums.length +1 ])
    
    }
    const removeNums = () =>{
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1
            })
        )


    }
  return (
    <div>
        <button onClick={removeNums}>Remove</button>

        <button onClick={addNums}>Add</button>
        <ul>
            {nums.map( num => <li>{num}</li>)}
        </ul>
    </div>
  )
  }

export default UseStateWithArrays