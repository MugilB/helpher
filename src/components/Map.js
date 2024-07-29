import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import bikebg from '../logo/bikebg.jpg';
import { Link } from 'react-router-dom'; 

const locations = [
  { label: 'Sri Krishna College of Technology', value: 'location1' },
  { label: 'Gandhipuram', value: 'location2' },
  { label: 'Kovaipudur', value: 'location3' },
  // Add more locations as needed
];

const Map = () => {
  const [pickupValue, setPickupValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [pickupOptions, setPickupOptions] = useState(locations);
  const [destinationOptions, setDestinationOptions] = useState(locations);

  const handlePickupSelect = (event, value) => {
    setPickupValue(value);
    console.log('Selected Pickup Location:', value);
  };

  const handleDestinationSelect = (event, value) => {
    setDestinationValue(value);
    console.log('Selected Destination Location:', value);
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '600px' }}>
      <div style={{ flex: 2, padding: '10px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ccc' }}>
        <img
          src={bikebg}
          alt="Google Logo"
          style={{ margin: '10px 10px', borderRadius: '50px', marginLeft: '70px' }}
          height="300px"
          width="300px"
        />
        <h2>Book a Ride</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <Autocomplete
              freeSolo
              options={pickupOptions.map((option) => option.label)}
              inputValue={pickupValue}
              onInputChange={(event, newInputValue) => setPickupValue(newInputValue)}
              onChange={handlePickupSelect}
              renderInput={(params) => (
                <TextField {...params} sx={{ mb: 2 }} label="Enter Your Location" />
              )}
            />
            <Autocomplete
              freeSolo
              options={destinationOptions.map((option) => option.label)}
              inputValue={destinationValue}
              onInputChange={(event, newInputValue) => setDestinationValue(newInputValue)}
              onChange={handleDestinationSelect}
              renderInput={(params) => (
                <TextField {...params} sx={{ mb: 2 }} label="Enter Your Destination" />
              )}
            />
          </div>
          <Link to="/MapC" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              style={{
                width: '100%',
                fontSize: '20px',
                padding: '15px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                cursor: 'pointer',
              }}
            >
              Pick Me
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Map;
