import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const CreateReview = async (req, res) => {
    const tourId = req.params.tourid;
    const newreview = new Review({ ...req.body });
  try {
      const SavedReview = await newreview.save();
      

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: SavedReview._id },
    },{new:true});
    res.status(200).json({
      sucess: true,
      message: "review submitted",
      data: SavedReview,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "failed to submit review",
      error: err.message,
    });
  }
};
