import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

const PackagesTable = () => {
  const [packages, setPackages] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 8;

  const fetchPackages = async (pageNumber = 0) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/tour/getall?page=${pageNumber}`
      );
      const tours = Array.isArray(res.data.data) ? res.data.data : [];
      setPackages(tours);
      setTotal(res.data.count || 0);
    } catch (error) {
      console.error("Failed to fetch packages:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;
    try {
      await axios.delete(`http://localhost:4000/api/v1/tour/${id}`);
      fetchPackages(page); // refetch current page
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if ((page + 1) * limit < total) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchPackages(page);
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        All Tour Packages
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-md">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">City</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Featured</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages?.map((pkg) => (
              <tr
                key={pkg._id}
                className="border-t dark:border-gray-700 text-gray-800 dark:text-gray-100"
              >
                <td className="p-3">{pkg.title}</td>
                <td className="p-3">{pkg.city}</td>
                <td className="p-3">${pkg.price}</td>
                <td className="p-3">{pkg.featured ? "Yes" : "No"}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    to={`/edit/${pkg._id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={20} />
                  </Link>
                  <button
                    onClick={() => handleDelete(pkg._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {packages.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-gray-600 dark:text-gray-400"
                >
                  No packages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 0}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {page + 1}
        </span>
        <button
          onClick={handleNextPage}
          disabled={(page + 1) * limit >= total}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PackagesTable;
