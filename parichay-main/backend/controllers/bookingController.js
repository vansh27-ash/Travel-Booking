import Booking from "../models/Booking.js"
import User from "../models/User.js"


export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body)
  const userid = req.params.userid;
  
    try {
      const savedbooking = await newBooking.save()
      await User.findByIdAndUpdate(userid, {
            $push: { mybooking: savedbooking._id },
          },{new:true});
        res.status(200).json({
            sucess: true,
            message: "your tour is booked",
            data:savedbooking,
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
          message: "tour not booked",
            err:err.message
            
        }
      )
    }
}



// get single booking
export const getbooking = async (req, res) => {
    const id = req.params.id;
  try {
    const bookings = await Booking.findById(id);

    res.status(200).json({
      sucess: true,
      message: "sucesfull",
      data: bookings,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "tour not found",
      error: err.message,
    });
  }
};

// get all booking
export const getAllbooking = async (req, res) => {
    
  try {
    const bookings = await Booking.find();
    res.status(200).json({
      sucess: true,
      message: "sucesfull",
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "internal server error",
      error: err.message,
    });
  }
};

// get all user bookings

export const getUserBookings = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId).populate({
      path: "mybooking",
      options: { sort: { createdAt: -1 } }, // Sort by newest first
    });
    

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User bookings retrieved successfully",
      count: user.mybooking.length,
      data: user.mybooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user bookings",
      error: err.message,
    });
  }
};

// Delete booking
export const deleteBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findByIdAndDelete(id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete booking",
      error: err.message,
    });
  }
};

// Update booking
export const updateBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update booking",
      error: err.message,
    });
  }
};