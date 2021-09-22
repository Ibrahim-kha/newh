  
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import './style.css'
import Spinner from '../../components/Spinner';
const BookingDetails = () => {
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const foundDetails = localStorage.getItem('booking')
        if (foundDetails)
            setDetails(JSON.parse(foundDetails))
        else
            setDetails('')
    }, [])

    const logout = () => {
        firebase.auth().signOut()
    }

    const clearBooking = () => {
        localStorage.removeItem('booking')
        setDetails('')
    }

    if (details === null) {
        return (
            <Spinner />
        )
    }

    if (!details||details.prev!==firebase.auth().currentUser.displayName) {
        return (
            <Redirect to='/booking' />
        )
    }
    if(details.p===1) {
        details.p=0;
        localStorage.setItem('booking', JSON.stringify(details))
    return (
            <>
              <div className='app-header'>
                <button className='logout-btn' onClick={logout}>Logout</button>
              </div>
             <div className="success">
             <div >
               <h1>Success</h1>
               <br></br>
               
               <p><prev>Your room has been booked 
                       successfully</prev></p>
               <h3>Your room details are as follows:</h3>
               <p>Hostel No. {details.hostelBuilding}</p> 
               <p>Romm No. {details.roomNo}</p>       
            </div>
            </div>
          </>   
    )
    }
    else {
    return (
            
        <>
            <div className='app-header'>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </div>
            <table className='booking-details'>
                <div className='theading'>
            <h1>Welcome {details.prev} </h1>
        <h2>You have already booked a room.</h2>
        <h3>Your room details are as follows:</h3></div>
                
                    <tr className='details-row'>
                        <td className='details-label'>
                            Hostel No.
                        </td>
                        <td className='details-value'>
                            {details.hostelBuilding}
                        </td>
                    </tr>
                    <tr className='details-row'>
                        <td className='details-label'>
                            Floor No.
                        </td>
                        <td className='details-value'>
                            {details.hostelFloor}
                        </td>
                    </tr>
                    <tr className='details-row'>
                        <td className='details-label'>
                            Room No.
                        </td>
                        <td className='details-value'>
                            {details.roomNo}
                        </td>
                    </tr>
                
            </table>
            
        </>
    )
    }
}
        


export default BookingDetails