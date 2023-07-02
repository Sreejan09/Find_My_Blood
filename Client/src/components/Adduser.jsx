
import React , {useState} from 'react';

function Adduser() {
  const [name, setName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
const [bloodGroup, setBloodGroup] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();

  const newPerson = {
    name,
    phoneNumber,
    address,
    bloodGroup,
    email,
  };
  
};
const onSubmit = async()=>{
  try {
    const detail= {name:name, phoneNumber:phoneNumber, address:address, bloodGroup:bloodGroup, email:email}
    //api
    const response = await fetch('http://localhost:8000/adduser', {
      method: 'POST',//sending body
      headers: {
        //format in which data is sending
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    });

    
    const data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

return (
  // https://cdn.pixabay.com/photo/2021/04/23/09/41/blood-6201268_640.png
   <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', margin: 0, padding: 0, backgroundImage: "", backgroundSize: '' }}>
   <div style={{ marginTop: '50px' }}>
     <h1 style={{ textAlign: 'center' }}>Registration Form</h1>
     <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
       <div className="form-group" style={{ marginBottom: '15px', textAlign: 'left', textDecoration:'bold' }}>
         <label htmlFor="name">Name:</label>
         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '5px' }} />
       </div>
       <div className="form-group" style={{ marginBottom: '15px', textAlign: 'left' }}>
         <label htmlFor="phoneNumber">Phone Number:</label>
         <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: '100%', padding: '5px' }} />
       </div>
       <div className="form-group" style={{ marginBottom: '15px', textAlign: 'left' }}>
         <label htmlFor="address">Address:</label>
         <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: '100%', padding: '5px' }} />
       </div>
       <div className="form-group" style={{ marginBottom: '15px', textAlign: 'left' }}>
         <label htmlFor="bloodGroup">Blood Group:</label>
         <select id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} style={{ width: '100%', padding: '5px' }}>
           <option value="">Choose</option>
           <option value="B+">B+</option>
           <option value="A+">A+</option>
           <option value="O+">O+</option>
           <option value="A-">A-</option>
           <option value="B-">B-</option>
           <option value="AB-">AB-</option>
           <option value="O-">O-</option>
         </select>
       </div>
       <div className="form-group" style={{ marginBottom: '15px', textAlign: 'left' }}>
         <label htmlFor="email">Email:</label>
         <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '5px' }} />
       </div>
       <button className="Submit" onClick={onSubmit} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Submit</button>
     </form>
   </div>
 </div>
 

);
  
}

export default Adduser;
