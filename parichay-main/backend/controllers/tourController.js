import Tour from "../models/Tour.js";

// create tour

export const createTour = async (req, res) => {
    const { title, city, address } = req.body;

    // Generate searchdata
    const searchdata = `${title} ${city} ${address}`;

    // Create new Tour with searchdata added
    const newTour = new Tour({ ...req.body, searchdata });

    const savedTour = await newTour.save();

  try {

    res
      .status(200)
      .json({ success: true, message: "Succesfully Created", data: savedTour });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create tour,Try again",
    });
  }
};

// update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Succesfully Updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update tour,Try again",
    });
  }
};

// delete tour

export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    const DeletedTour = await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Succesfully Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete tour,Try again",
    });
  }
};

// get single tour

export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate('reviews');
    res.status(200).json({
      success: true,
      message: "Succesfully fetched",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Tour not Found",
    });
  }
};

// get all tour

export const getAllTour = async (req, res) => {
  // for pagination

  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({}).populate('reviews')
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      count: tours.length,
      success: true,
      message: "Succesfully fetched",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "No tours are created",
    });
  }
};

// handle search

export const getToursBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate('reviews');
    res.status(200).json({
      count: tours.length,
      success: true,
      message: "Succesfully fetched",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
        message: "Not Found",
      error:err.message
    });
  }
};

// search by anything

export const getToursBySearchwithoutparams = async (req, res) => {
    const searchdata = new RegExp(req.query.searchdata, "i");
  try {
    const tours = await Tour.find({
      searchdata,
    }).populate("reviews");
    res.status(200).json({
      count: tours.length,
      success: true,
      message: "Succesfully fetched",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
        message: "Not Found",
    });
  }
};


// get featured tours

export const getfeaturedTour = async (req, res) => {

  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      
      success: true,
      message: "Succesfully fetched",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "No tours are created",
    });
  }
};

export const gettourcount = async (req, res) => {
    try {
      const tourcount = await Tour.estimatedDocumentCount();
      res.status(200).json({
        success: true,
        message: "Succesfully fetched",
        data: tourcount,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
          message: "Not fetched",

      });
    }
}