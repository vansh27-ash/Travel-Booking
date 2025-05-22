import { useState, useEffect } from "react";

const AddReview = () => {
  const [formData, setFormData] = useState({
    tourId: "",
    username: "",
    reviewText: "",
    rating: 5,
  });
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching tours
  useEffect(() => {
    const fetchTours = async () => {
      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Simulate tour data
        const mockTours = [
          { _id: "1", title: "Amazing Beach Resort Package" },
          { _id: "2", title: "Mountain Adventure Trek" },
          { _id: "3", title: "City Explorer Tour" },
          { _id: "4", title: "Wildlife Safari Experience" },
          { _id: "5", title: "Cultural Heritage Journey" },
        ];

        setTours(mockTours);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call

      

      console.log("Submitting review:", formData);
      alert("Review added successfully!");
      setFormData({
        tourId: "",
        username: "",
        reviewText: "",
        rating: 5,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add review");
    }
  };

  const StarRating = ({ rating, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-2xl transition-colors duration-200 ${
              star <= (hoverRating || rating)
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            } hover:text-yellow-400`}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onRatingChange(star)}
          >
            ★
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          ({rating} star{rating !== 1 ? "s" : ""})
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Add New Review
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Share your experience and help others discover amazing tours
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <h2 className="text-xl font-semibold text-white">Review Details</h2>
          </div>

          <div className="p-8">
            {/* Tour Selection */}
            <div className="mb-6">
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Select Tour
              </label>
              <div className="relative">
                <select
                  name="tourId"
                  value={formData.tourId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Choose a tour to review</option>
                  {tours.map((tour) => (
                    <option key={tour._id} value={tour._id}>
                      {tour.title}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="mb-6">
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Your Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Rating */}
            <div className="mb-6">
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Your Rating
              </label>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <StarRating
                  rating={parseInt(formData.rating)}
                  onRatingChange={(rating) =>
                    setFormData((prev) => ({ ...prev, rating }))
                  }
                />
              </div>
            </div>

            {/* Review Text */}
            <div className="mb-8">
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Your Review
              </label>
              <textarea
                name="reviewText"
                value={formData.reviewText}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Share your experience... What did you like most? What could be improved? Any tips for future travelers?"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-500 dark:placeholder-gray-400"
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Be honest and helpful to other travelers
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formData.reviewText.length}/500
                </span>
              </div>
            </div>

            {/* Review Guidelines */}
            <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Review Guidelines
              </h3>
              <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Be honest and constructive in your feedback</li>
                <li>• Focus on your personal experience</li>
                <li>• Avoid inappropriate language or personal attacks</li>
                <li>
                  • Include specific details that might help other travelers
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={
                  !formData.tourId || !formData.username || !formData.reviewText
                }
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
