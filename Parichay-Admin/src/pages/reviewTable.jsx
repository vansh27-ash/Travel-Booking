import { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";

const ReviewsTable = () => {
  const [reviews, setReviews] = useState([]);
  const [search] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/review");
      const sorted = res.data.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ); // newest first
      setReviews(sorted);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter((review) => {
    const matchSearch =
      review.username.toLowerCase().includes(search.toLowerCase()) ||
      review.productId?.toLowerCase().includes(search.toLowerCase());
    const matchRating = ratingFilter
      ? review.rating === parseInt(ratingFilter)
      : true;
    return matchSearch && matchRating;
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        All Reviews
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* <input
          type="text"
          placeholder="Search by username or tour ID"
          className="px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Ratings</option>
          {[5, 4, 3, 2, 1, 0].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-md border dark:border-gray-700 shadow-md">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              {/* <th className="p-3 text-left">Tour ID</th> */}
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Review</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map((review) => (
              <tr
                key={review._id}
                className="border-t dark:border-gray-700 text-gray-800 dark:text-gray-100"
              >
                {/* <td className="p-3">{review.productId}</td> */}
                <td className="p-3">{review.username}</td>
                <td className="p-3 max-w-xs truncate" title={review.reviewText}>
                  {review.reviewText}
                </td>
                <td className="p-3 flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </td>
                <td className="p-3">
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {filteredReviews.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-gray-600 dark:text-gray-400"
                >
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewsTable;
