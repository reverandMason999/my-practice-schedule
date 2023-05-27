
import { useState } from "react"
import axios from "axios"
import './AddNew.css'
const AddNew = ({ addRoutine }) => {
 const [name, setName] = useState('')
 const [dayOfWeek, setDayOfWeek] = useState('')
 const [bpm, setBpm] = useState('')
 const [duration, setDuration] = useState('')
 const handleSubmit = (e) => {
     e.preventDefault()
     const newRoutine = { name, dayOfWeek, bpm, duration }
     axios.post('http://localhost:5000/routine', newRoutine)
     .then(res => {
         console.log(res)
         addRoutine(res.data)
         setName('')
         setDayOfWeek('')
         setBpm('')
         setDuration('')
        window.location = "/Profile";

    })
     .catch(err => console.log(err))
 }
 return (
     <div className='routine-form'>
         <form onSubmit={handleSubmit}>
             <div className='form-group'>
                 <label>Name:</label>
                 <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
             </div>
             <div className='form-group'>
                 <label>When:</label>
                 <input type='text' id='dayOfWeek' value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)} required />
             </div>
             <div className='form-group'>
                 <label >BPM:</label>
                 <input type='number' id='bpm' value={bpm} onChange={(e) => setBpm(e.target.value)} required />
             </div>
             <div className='form-group'>
                 <label>Duration:</label>
                 <input type='text' id='duration' value={duration} onChange={(e) => setDuration(e.target.value)} required />
             </div>
             <button type='submit'>Add Routine</button>
         </form>
     </div>
 )
}
export default AddNew;