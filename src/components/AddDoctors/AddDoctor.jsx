import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    mobile_num: '',
    about: '',
    email: '',
    dob: '',
    sex: '',
    address: '',
    pincode: '',
    Occupation: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctorData = {
      ...doctor,
      username: doctor.name + doctor.mobile_num[8] + doctor.mobile_num[9], 
      password: '123456', 
    };

    console.log(doctorData);
    axios.post('http://127.0.0.1:8000/Add_Doc', doctorData)
      .then((response) => {
        console.log('Doctor added successfully:', response.data);
        navigate('/Home');
      })
      .catch((error) => {
        console.error('There was an error adding the doctor:', error);
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
            value={doctor.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile_num"
            value={doctor.mobile_num}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>About:</label>
          <textarea
            name="about"
            value={doctor.about}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={doctor.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sex:</label>
          <select
            name="sex"
            value={doctor.sex}
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
            value={doctor.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={doctor.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={doctor.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;