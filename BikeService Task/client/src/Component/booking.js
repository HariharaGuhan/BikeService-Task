import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './bookingstyle.css';  // Import the CSS file for styling
import { Link } from 'react-router-dom';

export function BookingTable() {
  const handleBookingDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3005/delete/${id}`);

      if (response.data.status === 'deleted') {
        alert('Booking successfully deleted');
        // Remove the deleted booking from the state
        setBookings(bookings.filter((booking) => booking.id !== id));
      } else if (response.status === 404) {
        alert('Booking not found');
      } else {
        alert('Error deleting the booking');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the booking');
    }
  };

  const [bookingData, setBookingData] = useState({
    customer: '',
    service: '',
    bikestation: '',
    booking_date: '',
    status: '', // Add status field
  });

  const [bookings, setBookings] = useState([]); // Add state for storing bookings

  useEffect(() => {
    // Fetch and display existing bookings when the component mounts
    async function fetchBookings() {
      try {
        const response = await axios.get('http://localhost:3005/getdata');
        setBookings(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchBookings();
  }, []); // Empty dependency array to run the effect only once

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/Registration', bookingData);

      if (response.data.status === 'Registered') {
        alert('Booking successful!');
        setBookings([...bookings, bookingData]); // Add the new booking to the state
        setBookingData({
          customer: '',
          service: '',
          bikestation: '',
          booking_date: '',
          status: '', // Reset the form fields
        });
      } else {
        alert('Booking failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during booking.');
    }
  };


  return (
    <div className="booking-container col-lg-12">
      <table className="booking-table table table-bordered">
        {/* Table header */}
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Bike Station</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className='border border-dark'>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.customer}</td>
              <td>{booking.service}</td>
              <td>{booking.bikestation}</td>
              <td>{booking.booking_date}</td>
              <td>{booking.status}</td>
              <td>
                {/* Add buttons for editing and deleting bookings */}
                <Link to="/update"><button className="bg-primary col-lg-6">Edit</button></Link>
                <button className="bg-danger col-lg-6 " onClick={() => handleBookingDelete(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="booking-form" style={{ paddingLeft: "5em", paddingBottom: ".5em" }}>
        {/* Booking form */}
        <form onSubmit={handleBookingSubmit}>
          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "2em" }}>Customer:</label>
            <input type="text"
              name="customer"
              id="customer"
              value={bookingData.customer}
              onChange={handleInputChange}
              className="form-control" />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "3em" }}>Service:</label>
            <input type="text"
              name="service"
              id="service"
              value={bookingData.service}
              onChange={handleInputChange}
              className="form-control" />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "1em" }}>Bike Station:</label>
            <input type="text"
              name="bikestation"
              id="bikestation"
              value={bookingData.bikestation}
              onChange={handleInputChange}
              className="form-control" />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "4.2em" }}>Date:</label>
            <input type="date"
              name="booking_date"
              id="booking_date"
              value={bookingData.booking_date}
              onChange={handleInputChange}
              className="form-control" />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "3.5em" }}>Status:</label>
            <input type="text" name="status" id="status" onChange={handleInputChange} className="form-control" />
          </div><br />

          <button style={{ marginLeft: "2em" }} type="submit">Submit</button>&nbsp;&nbsp;&nbsp;
          <button >Create New Booking</button>
        </form>
        </div>
    </div>
  );
}