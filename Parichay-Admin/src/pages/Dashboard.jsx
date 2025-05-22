import { useEffect, useState } from "react";
import axios from "axios";
import { Briefcase, Calendar, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [totalPackages, setTotalPackages] = useState(0);
  const [todayBookings, setTodayBookings] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total packages
        const packagesRes = await axios.get(
          "http://localhost:4000/api/v1/tour/getall"
        );
        setTotalPackages(packagesRes.data.count || 0);

        // Fetch all bookings
        const bookingsRes = await axios.get(
          "http://localhost:4000/api/v1/booking"
        );
        const allBookings = bookingsRes.data.data;

        // Count today's bookings
        const today = new Date().toISOString().split("T")[0];
        const todayCount = allBookings.filter(
          (booking) => booking.bookAt.split("T")[0] === today
        ).length;
        setTodayBookings(todayCount);

        // Calculate revenue
        const revenue = allBookings.reduce((acc, cur) => acc + cur.price, 0);
        setTotalRevenue(revenue);

        // Sort bookings by date desc
        const sortedBookings = [...allBookings].sort(
          (a, b) => new Date(b.bookAt) - new Date(a.bookAt)
        );
        setRecentBookings(sortedBookings.slice(0, 5)); // latest 5
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      title: "Total Packages",
      value: totalPackages,
      icon: <Briefcase size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Bookings Today",
      value: todayBookings,
      icon: <Calendar size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: <DollarSign size={28} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border dark:border-gray-700 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {stat.title}
              </h2>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${stat.color}`}
            >
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border dark:border-gray-700 overflow-x-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead className="text-gray-600 dark:text-gray-300 border-b dark:border-gray-600">
              <tr>
                <th className="py-2">User</th>
                <th className="py-2">Destination</th>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-100">
              {recentBookings.map((booking, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="py-2">{booking.fullName}</td>
                  <td className="py-2">{booking.tourName}</td>
                  <td className="py-2">
                    {new Date(booking.bookAt).toLocaleDateString()}
                  </td>
                  <td className="py-2">${booking.price}</td>
                </tr>
              ))}
              {recentBookings.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
