import { useState, useEffect } from "react"
import axios from "axios"
import './RoutineTable.css'
import AddNew from "../AddNewRoutine/AddNew"

const RoutineTable = () => {
 const[ data, setData ] = useState([])
 useEffect(() => {
     axios.get('http://localhost:5000/routine')
     .then(res => setData(res.data))
     .catch(err => console.log(err))
 }, []);
 const deleteRoutine = (id) => {
     axios.delete(`http://localhost:5000/routine/${id}`).then(res => {
         console.log(res)
         setData(data.filter(routine => routine.id !== id))
     }).catch(err => console.log(err))
     
 }
 const addRoutine = (routine) => {
     setData([...data, routine])
 }
 return (
     <div className='container'>
         <div className='table-contents'>
             <h3>Your new practice routines</h3>
             <table>
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>When</th>
                         <th>BPM</th>
                         <th>Duration</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         data.map((routine, index) => {
                             return(
                                 <tr key={index}>
                                     <td>{routine.name}</td>
                                     <td>{routine.dayOfWeek}</td>
                                     <td>{routine.bpm}</td>
                                     <td>{routine.duration}</td>
                                     <td><button type='delete' onClick={() => deleteRoutine(routine.id)}>x</button></td>
                                 </tr>
                             )
                         })
                     }
                 </tbody>
             </table>
         </div>
         <AddNew addRoutine={addRoutine} />  
     </div>
 )
}

export default RoutineTable;

