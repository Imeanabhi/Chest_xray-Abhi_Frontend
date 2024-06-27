import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const [patient, setPatient] = useState({
    name: '',
    mobile_num: '',
    email: '',
    dob: '',
    sex: '',
    address: '',
    pincode: '',
    Occupation: '',
    medication:'',
    weight:'',
    height:'',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const patientData = {
      ...patient,
      username: patient.name + patient.mobile_num[8] + patient.mobile_num[9], 
      password: '123456', 
    };

    console.log(patientData);
    axios.post('http://127.0.0.1:8000/Add_Pat', patientData)
      .then((response) => {
        console.log('Patient added successfully:', response.data);
        navigate('/Home');
      })
      .catch((error) => {
        console.error('There was an error adding the patient:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile_num"
            value={patient.mobile_num}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={patient.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sex:</label>
          <select
            name="sex"
            value={patient.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={patient.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={patient.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        </div>
        <div>
          <label>Medication:</label>
          <textarea
            name="medication"
            value={patient.medication}
            onChange={handleChange}
          />
        </div>



        <div>
          <label>Weight:</label>
          <input
            name="weight"
            type="number"
            value={patient.weight}
            onChange={handleChange}
          />
        </div>

        
        <div>
          <label>height:</label>
          <input
          type="number"
            name="height"
            value={patient.height}
            onChange={handleChange}
          />
        </div>


        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;