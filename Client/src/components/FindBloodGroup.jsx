import React, { useState, useEffect } from 'react';
import axios from 'axios';
const URL = 'http://localhost:8000';

const FindBloodGroup = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [people, setPeople] = useState([]);

 const searchBloodGroup= async()=>{
    if(bloodGroup){
      try {
        const detail= {bloodGroup:bloodGroup}
        const response = await fetch('http://localhost:8000/getBloodGroup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(detail)
        });


        const data = await response.json();
        console.log(data)
        setPeople(data)
        console.log(typeof(data))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
 }

  return (
    // 
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', margin: 0, padding: 0, backgroundImage: "url", backgroundSize: 'fixed' }}>
    <div style={{ marginTop: '50px' }}>
      <h2>Find My Blood Group</h2>
      <label>
        Blood Group:
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
          <option value="">Choose</option>
          <option value="B+">B+</option>
          <option value="A+">A+</option>
          <option value="O+">O+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="O-">O-</option>
        </select>
        
      </label>
      <button onClick={searchBloodGroup} >Search</button>
      <br />
      {people.length > 0 ? (
        <div>
          <h3>People with the same blood group:</h3>
          <ul>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <colgroup>
    <col style={{ width: '20%' }} />
    <col style={{ width: '30%' }} />
    <col style={{ width: '30%' }} />
    <col style={{ width: '20%' }} />
  </colgroup>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '30px' }}>Name</th>
      <th style={{ border: '1px solid black', padding: '30px' }}>Phone Number</th>
      <th style={{ border: '1px solid black', padding: '30px' }}>Address</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
    </tr>
  </thead>
              </table>
            {people.map((person) => (
              
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
             <tbody>
              <tr>
             <td style={{ border: '1px solid black', width: '103px' }}>{person.name}</td>
      <td style={{ border: '1px solid black', width: '132px' }}>{person.phoneNumber}</td>
      <td style={{ border: '1px solid black', width :'131px' }}>{person.address}</td>
      <td style={{ border: '1px solid black', padding: '8px' }}>{person.email}</td>
    </tr>
  </tbody>
            </table>
            
            ))}
          </ul>
          </div>
        
      ) : (
        <p>No people found with the selected blood group.</p>
      )}
    </div>
    </div>
  );
};

export default FindBloodGroup;
