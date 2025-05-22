import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const BookingsTable = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Fetch all bookings
  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/booking");
      const sorted = res.data.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ); // newest first
      setBookings(sorted);
      setFiltered(sorted);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter logic
  useEffect(() => {
    let result = [...bookings];

    if (search) {
      const term = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.fullName.toLowerCase().includes(term) ||
          b.tourName.toLowerCase().includes(term) ||
          b.userEmail?.toLowerCase().includes(term) ||
          b.phone.toString().includes(term)
      );
    }

    if (fromDate) {
      result = result.filter((b) => new Date(b.bookAt) >= new Date(fromDate));
    }
    if (toDate) {
      result = result.filter((b) => new Date(b.bookAt) <= new Date(toDate));
    }

    setFiltered(result);
  }, [search, fromDate, toDate, bookings]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Bookings Overview
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name, tour, email or phone"
          className="px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          className="px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          className="px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-md border dark:border-gray-700 shadow-md">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3 text-left">Tour</th>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Guests</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((booking) => (
              <tr
                key={booking._id}
                className="border-t dark:border-gray-700 text-gray-800 dark:text-gray-100"
              >
                <td className="p-3">{booking.tourName}</td>
                <td className="p-3">{booking.fullName}</td>
                <td className="p-3">{booking.userEmail}</td>
                <td className="p-3">{booking.phone}</td>
                <td className="p-3">{booking.guestSize}</td>
                <td className="p-3">
                  {format(new Date(booking.bookAt), "dd MMM yyyy")}
                </td>
                <td className="p-3">${booking.price}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="p-4 text-center text-gray-600 dark:text-gray-400"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsTable;
