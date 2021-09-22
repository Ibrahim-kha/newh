import React, { useEffect,useState } from 'react';
import constants from '../../data/constants'
//import maleImage from '../../images/male.jpg'
//import femaleImage from '../../images/female.png'
import firebase from 'firebase';
import './style.css';
import { Redirect } from 'react-router-dom';



const BookingForm = () => {
    const [hostelType, setHostelType] = useState(null)
    const [hostelFloor, setHostelFloor] = useState(null)
    const [hostelBuilding, setHostelBuilding] = useState(null)
    const [roomNo, setRoomNo] = useState(null)
    const [roomId, setRoomId] = useState("one")
    const [error, setError] = useState(null)
    const [hasDetails, setHasDetails] = useState(null)
    const [num,setNum]=useState(0);
    const createFloors = () => {
        
            return (
            <>
            <div>
<div style={{height:"30px",textAlign:"center"}}>
   <select name="selectList" id="selectList" onChange={(e) => { setHostelFloor((e.target.value)) }}>
   <option value={1}> 1st floor</option>
   <option value={2}> 2nd floor</option>
   <option value={3}> 3rd floor</option>
   <option value={4}> 4th floor</option>
   <option value={5}> 5th floor</option>
   </select>
</div>

<div style={{width:"290px",height:"250px",border:"2px solid grey",borderRadius:"9px"}}>
    <div style={{margin:"20px",display:"flex",width:"250px",justifyContent:"space-around"}}>
    <a href="#submit-form"><button className="room" id="one" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={1} onClick={() =>{ setRoomNo(1);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("one").style.backgroundColor="grey";setRoomId("one");}}>1</button></a>
    <a href="#submit-form"><button className="room" id="two" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={2} onClick={() =>{ setRoomNo(2);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("two").style.backgroundColor="grey";setRoomId("two");}}>2</button></a>
    <a href="#submit-form"><button className="room" id="three" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={3} onClick={() =>{ setRoomNo(3);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("three").style.backgroundColor="grey";setRoomId("three");}}>3</button></a>
    <a href="#submit-form"><button className="room" id="four" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={4} onClick={() =>{ setRoomNo(4);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("four").style.backgroundColor="grey";setRoomId("four");}}>4</button></a>
    </div>
    <div style={{margin:"20px",display:"flex",width:"250px",justifyContent:"space-between"}}>
    <a href="#submit-form"><button className="room" id="ten" style={{marginLeft:"13px",width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={10} onClick={() =>{ setRoomNo(10);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("ten").style.backgroundColor="grey";setRoomId("ten");}}>10</button></a>
    <a href="#submit-form"><button className="room" id="five" style={{marginRight:"13px",width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={5} onClick={() =>{ setRoomNo(5);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("five").style.backgroundColor="grey";setRoomId("five");}}>5</button></a>
    </div>
    <div style={{margin:"20px",display:"flex",width:"250px",justifyContent:"space-around"}}>
    <a href="#submit-form"><button className="room" id="nine" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={9} onClick={() =>{ setRoomNo(9);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("nine").style.backgroundColor="grey";setRoomId("nine");}}>9</button></a>
    <a href="#submit-form"><button className="room" id="eight" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={8} onClick={() =>{ setRoomNo(8);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("eight").style.backgroundColor="grey";setRoomId("eight");}}>8</button></a>
    <a href="#submit-form"><button className="room" id="seven" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={7} onClick={() =>{ setRoomNo(7);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("seven").style.backgroundColor="grey";setRoomId("seven");}}>7</button></a>
    <a href="#submit-form"><button className="room" id="six" style={{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"}}value={6} onClick={() =>{ setRoomNo(6);document.getElementById(roomId).style.backgroundColor="#99ff99";document.getElementById("six").style.backgroundColor="grey";setRoomId("six");}}>6</button></a>
    </div>
</div>
</div>
</>
        )
        /*const floors = []
        for (let i = 1; i <= constants.maxHostelFloor; i++) {
            floors.push(
                <div className={'floor-num' + (hostelFloor === i? ' selected ': '')} key={i} onClick={() => setHostelFloor(i)}>
                    {i}
                </div>
            )
        }*/
    
    }
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const foundDetails = localStorage.getItem('booking')
        if (foundDetails)
            setDetails(JSON.parse(foundDetails))
        else
            setDetails('')
    }, [])
    const clearBooking = () => {
        localStorage.removeItem('booking')
        setDetails('')
    }

    const createBuildings = () => {
             if(hostelType==='male') 
        return (
            <>
            <div  style={{width:"17%",display:'flex',justifyContent:"space-around"}}>
                <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}}  onClick={() => setHostelBuilding('B1')}>B1</button></div>
                <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('B2')}>B2</button></div>
                <div><button style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('B3')}>B3</button></div>

            </div>
            <div  style={{width:"17%",display:'flex',justifyContent:"space-around"}}>
            <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('B4')}>B4</button></div>
            <div><button style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('B5')}>B5</button></div>
            <div><button style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('B6')}>B6</button></div>

        </div>
       </>
        )
        else 
        return (
            <>
            <div  style={{width:"17%",display:'flex',justifyContent:"space-around"}}>
                <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('G1')}>G1</button></div>
                <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('G2')}>G2</button></div>
                <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('G3')}>G3</button></div>

            </div>
            <div  style={{width:"17%",display:'flex',justifyContent:"space-around"}}>
            <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('G4')}>G4</button></div>
            <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('G5')}>G5</button></div>
            <div><button  style={{width:'60px',height:'60px',backgroundColor:'grey',borderRadius:'10px',color:'white',fontSize:"25px"}} onClick={() => setHostelBuilding('G6')}>G6</button></div>

        </div>
       </>
        )
        
    }
    
        /*const rooms = []
        for (let i = 1; i <= constants.totalRoom; i++) {
            rooms.push(
                <div className={'room-num' + (roomNo === i? ' selected': '')} key={i} onClick={() => setRoomNo(i)}>
                    {i}
                </div>
            )
        }
        return rooms*/

    const onSubmit = () => {
        if (hostelType && hostelFloor && roomNo && hostelBuilding) {
            const details = {
                hostelType, hostelFloor, roomNo, hostelBuilding,prev,p
            }
            localStorage.setItem('booking', JSON.stringify(details))
            setHasDetails(true)
        } else {
            setError(true)
        }
    }

    const logout = () => {
        firebase.auth().signOut()
    }

    if (hasDetails) {
        return (
            <Redirect to='/bookingdetails'/>
        )
    }

    if (error) {
        return (
            <div className='booking-form-error'>
                <div className='error-message'>Some fields are missing.</div>
                <div className='error-clear' onClick={() => setError(null)}>
                    Fill details
                    {hasDetails}
                </div>
            </div>
        )
    }
   var prev=firebase.auth().currentUser.displayName;
   var p=1;
    return (
        <div className='booking-form'>
            <div className='app-header'>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </div>
            <div className='booking-form-part' id='hostel-type'>
                <div className='booking-form-part-label'>Choose your Hostel</div>
                <div className='booking-form-part-details hostel-type-details'>
                    <div className={'hostel-type male' + (hostelType === 'male'? 'selected': '')} onClick={() => {setHostelType('male')}}>
                        <img src='data:image/png;base64,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'></img>
                        <div>Boys' hostel </div>
                    </div>
                    <div className={'hostel-type female' + (hostelType === 'female'? 'selected': '')} onClick={() => {setHostelType('female')}}>
                        <img src='data:image/jpeg;base64,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'></img>
                        <div>Girls' hostel</div>
                    </div>
                </div> 
                <a className='next-link' href="#building-no">
                <button className='next' >Next</button>
                </a>
            </div>
            <div className='booking-form-part' id='building-no'>
                <div className='booking-form-part-label'>Choose Building</div>
                <div className='booking-form-part-details room-details'>
                    {createBuildings()}
                </div>
                <a className='next-link' href="#hostel-floor">
                    <button className='next'>Next</button>
                </a>
            <div className='booking-form-part' id='hostel-floor'>
                <div className='booking-form-part-label'>Choose hostel floor</div>
                <div className='booking-form-part-details floor-details'>
                    {createFloors()}
                </div>
                </div>
                <div id='submit-form'>
                    <button onClick={onSubmit}>Book room</button> 
                </div>
                <div className='clear-booking'>
                    <a className='next-link' href="#hostel-type">
                <button onClick={clearBooking}>Cancel Booking</button>
                </a>
                </div>
                </div>
                </div>
            

    )
}

export default BookingForm