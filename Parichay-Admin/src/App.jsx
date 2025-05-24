import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/dashboardComps/Sidebar";

import AddPackage from "./pages/addPackage";
import EditPackage from "./pages/editPackage";
import PackageTable from "./pages/packageTable";
import UserTable from "./pages/usersTable";
import BookingsTable from "./pages/bookingTable";
import ReviewsTable from "./pages/reviewTable";
import AddReview from "./pages/addReview";
import Login from "./pages/Login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          <Sidebar />
          <div className="ml-64 flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddPackage />} />
              <Route path="/edit/:id" element={<EditPackage />} />
              <Route path="/package-table" element={<PackageTable />} />
              <Route path="/user-table" element={<UserTable />} />
              <Route path="/bookings" element={<BookingsTable />} />
              <Route path="/reviews" element={<ReviewsTable />} />
              <Route path="/add-reviews" element={<AddReview />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center h-full">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                      404 - Page Not Found
                    </h1>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
