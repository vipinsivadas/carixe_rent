import axios from 'axios';
import React, { useState, useEffect } from 'react';

function BookingPage(props) {
    const [bookings, setBookings] = useState([]);
   



    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3000/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/bookings/${id}`);
            setBookings(bookings.filter(booking => booking._id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

   
   
    


    return (
        <main className='h-full '>
            <div className='bg-cover bg-center h-96 'style={{ backgroundImage: "url('image/bcar.jpg')" }}>
              
            </div>
            <h1 className='text-3xl '>Booking Details</h1>
            <div className='h-1/2 p-2'>
                <div className='mt-28  grid  gap-4'>

                    {bookings.map(booking => (
                        <div className='border border-gray-300 p-4 rounded-lg' key={booking._id}>
                            <img src={booking.image} alt={booking.name} className="w-16 h-16 object-cover rounded-full" />
                            <div className='mt-4 flex'>
                            <p className='font-semibold'>name:{booking.name}</p>
                            <p>Price: {booking.price}</p>
                            <p>Start Date: {booking.startDate}</p>
                            <p>End Date: {booking.endDate}</p>
                            <p>User Email: {booking.user.email}</p>
                            <p>User Name: {booking.user.name}</p>
                            <p>User Phone: {booking.user.phone}</p>
                            </div>
                            <div className='mt-4 flex justify-between'>
                            <button className='bg-yellow-300 p-2 rounded-lg' onClick={() => handleDelete(booking._id)}>Delete</button>

                            {/* Add update button and logic here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}

export default BookingPage;