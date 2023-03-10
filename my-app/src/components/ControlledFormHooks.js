import React , {useState} from 'react'
import ConditionalRenderingFunctional from './ConditionalRenderingFunctional';

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,category,comments)

    }


  return (
    <div>
         <form onSubmit={handleSubmit}>
                <div>

                    <label htmlFor='id-name'>Your Name:</label>
                    <input
                        type='text'
                        id='id-name' 
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='id-category'>Your Name:</label>

                    <select
                        id='id-category'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}

                    >

                        <option value='website'>Website Issue</option>
                        <option value='order'>Order Issue</option>
                        <option value='general'>General Inquiry</option>



                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments</label>
                    <textarea
                        id='id-comments'
                        name='comments'
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />

                </div>



                <input type='submit' value='submit' />


            </form>
    </div>
  )
}

export default ControlledFormHooks