import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { 
  RiCalendarLine, 
  RiUserLine, 
  RiPhoneLine, 
  RiMailLine,
  RiFileListLine,
  RiArrowRightLine,
  RiMapPinLine,
  RiMoneyDollarCircleLine,
  RiDeleteBinLine,
  RiEditLine
} from "@remixicon/react";
import { BASE_URL } from "../utils/config";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        if (!user) return;
        
        const response = await fetch(`${BASE_URL}booking/${user._id}/bookings`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        
        const data = await response.json();
        setBookings(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch bookings");
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, [user]);

  const handleDeleteBooking = async (bookingId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
      if (!confirmDelete) return;

      const response = await fetch(`${BASE_URL}booking/${bookingId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      // Remove the booking from state
      setBookings(bookings.filter(booking => booking._id !== bookingId));
      
      // Also remove from user's mybooking array
      await fetch(`${BASE_URL}user/${user._id}/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

    } catch (err) {
      setError(err.message || "Failed to delete booking");
    }
  };

  const handleEditBooking = (bookingId) => {
    navigate(`/edit-booking/${bookingId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f6932d]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
    }
    
    

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Bookings
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {bookings.length > 0
              ? "Here are all your tour bookings"
              : "You haven't made any bookings yet"}
          </p>
          {bookings.length === 0 && (
            <Link
              to="/tours"
              className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f6932d] hover:bg-[#e07e1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f6932d]"
            >
              Browse Tours <RiArrowRightLine className="ml-2" />
            </Link>
          )}
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow overflow-hidden rounded-lg relative"
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => handleEditBooking(booking._id)}
                  className="p-2 text-[#f6932d] hover:text-[#e07e1a] transition-colors"
                  title="Edit Booking"
                >
                  <RiEditLine size={18} />
                </button>
                <button
                  onClick={() => handleDeleteBooking(booking._id)}
                  className="p-2 text-red-500 hover:text-red-700 transition-colors"
                  title="Delete Booking"
                >
                  <RiDeleteBinLine size={18} />
                </button>
              </div>

              <div className="px-4 py-5 sm:px-6 bg-[#0d2231]">
                <h3 className="text-lg leading-6 font-medium text-white">
                  {booking.tourName}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  <RiMapPinLine className="inline mr-1" size={14} />
                  {booking.tourLocation || "Location not specified"}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                          <RiMailLine className="mr-2" size={16} /> Booking
                          Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {booking.userEmail || user.email}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                          <RiUserLine className="mr-2" size={16} /> Guests
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {booking.guestSize}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                          <RiPhoneLine className="mr-2" size={16} /> Phone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {booking.phone}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                          <RiCalendarLine className="mr-2" size={16} /> Booking
                          Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {new Date(booking.bookAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                          <RiMoneyDollarCircleLine className="mr-2" size={16} />{" "}
                          Total Price
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          $
                          {(
                            booking.guestSize *
                            (booking.price + 500 + ((booking.price + 500) * 18) / 100)
                          ).toFixed(0) || "Not specified"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;