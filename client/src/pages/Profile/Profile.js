import AddNew from "../../components/AddNewRoutine/AddNew"
import Metronome from "../../components/Metronome/Metronome"
import Header from "../../components/Header/Header"
import RoutineTable from "../../components/Routine/RoutineTable"
import './Profile.css'



const Profile = () => {
    return (
        <>
        <div className='profile-container'>
       <Header />
       <div className='content-container'>
        <RoutineTable />
        </div>
        <Metronome />
        </div>
        </>
    )
}

export default Profile;