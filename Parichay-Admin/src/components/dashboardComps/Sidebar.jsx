import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  PlusCircle,
  Table,
  UserCircle,
  LogOut,
  LogIn,
} from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const links = [
    { to: "/", label: "Dashboard", icon: <Home size={20} /> },
    { to: "/add", label: "Add Package", icon: <PlusCircle size={20} /> },
    { to: "/package-table", label: "Package Table", icon: <Table size={20} /> },
    { to: "/user-table", label: "User Table", icon: <Table size={20} /> },
    { to: "/bookings", label: "Bookings Table", icon: <Table size={20} /> },
    { to: "/reviews", label: "Reviews Table", icon: <Table size={20} /> },
    {
      to: "/add-reviews",
      label: "Add Reviews",
      icon: <PlusCircle size={20} />,
    },
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 z-50 bg-white dark:bg-gray-800 shadow-lg border-r dark:border-gray-700 hidden md:flex flex-col p-4 justify-between">
      <div>
        <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-4 text-center">
          Parichaye
        </h2>
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 ${
                currentPath === link.to
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t pt-4">
        {user ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
              <UserCircle size={20} />
              {user.username}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 mt-2 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <LogIn size={18} />
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
