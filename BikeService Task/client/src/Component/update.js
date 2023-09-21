import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './bookingstyle.css';

export default function Update({ id }) {
    const [customer, setCustomer] = useState('');
  const [service, setService] = useState('');
  const [bikestation, setBikestation] = useState('');
  const [booking_date, setBookingDate] = useState('');

  useEffect(() => {
    // Fetch data from the Express API when the component mounts
    axios.get(`http://localhost:3005/Get_update/${id}`)
      .then((response) => {
        const data = response.data[0];
        setCustomer(data.customer);
        setService(data.service);
        setBikestation(data.bikestation);
        setBookingDate(data.booking_date);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]); // Make sure to include id in the dependency array to re-fetch data when it changes

  const handleBookingUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.put(`http://localhost:3005/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.status === 'success') {
        alert('Successfully updated your order');
        window.location.href = '/products';
      } else {
        alert('Contact admin');
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert('Error');
      window.location.reload();
    }
  };

    return (
        
        <>
            <div className="booking-form" style={{ paddingLeft: "5em", paddingBottom: ".5em" }}>
                {/* Booking form */}
                <form onSubmit={handleBookingUpdate}>
                    <div style={{ padding: ".8em" }}>
                        <label style={{ paddingRight: "2em" }}>Customer:</label>
                        <input
                            type="text"
                            name="customer"
                            id="customer"
                            className="form-control"
                            value={customer}
                            onChange={(e) => setCustomer(e.target.value)}
                        />
                    </div>

                    <div style={{ padding: ".8em" }}>
                        <label style={{ paddingRight: "3em" }}>Service:</label>
                        <input
                            type="text"
                            name="service"
                            id="service"
                            className="form-control"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        />
                    </div>

                    <div style={{ padding: ".8em" }}>
                        <label style={{ paddingRight: "1em" }}>Bike Station:</label>
                        <input
                            type="text"
                            name="bikestation"
                            id="bikestation"
                            className="form-control"
                            value={bikestation}
                            onChange={(e) => setBikestation(e.target.value)}
                        />
                    </div>

                    <div style={{ padding: ".8em" }}>
                        <label style={{ paddingRight: "4.2em" }}>Date:</label>
                        <input
                            type="date"
                            name="booking_date"
                            id="booking_date"
                            className="form-control"
                            value={booking_date}
                            onChange={(e) => setBookingDate(e.target.value)}
                        />
                    </div>

                    <div style={{ padding: ".8em" }}>
                        <label style={{ paddingRight: "3.5em" }}>Status:</label>
                        <input type="text" name="status" id="status" className="form-control" />
                    </div><br />

                    <button style={{ marginLeft: "2em" }} type="submit">Update</button>&nbsp;&nbsp;&nbsp;
                </form>
            </div>
        </>
    );
}
