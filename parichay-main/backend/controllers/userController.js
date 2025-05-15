import User from "../models/User.js";
import bcrypt from 'bcryptjs'


// create User


// update User

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, currentPassword, newPassword } = req.body;

  try {
    // Find the user
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Verify user is updating their own profile
    // if (user._id.toString() !== req.user.id) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Not authorized to update this profile",
    //   });
    // }

    // Check if changing password
    if (newPassword) {
      // Verify current password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Current password is incorrect",
        });
      }

      // Validate new password
      if (newPassword.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters",
        });
      }

      // Hash new password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    // Update other fields
    if (username) user.username = username;
    if (email) {
      // Check if email is being changed to an existing email
      const emailExists = await User.findOne({ email });
      if (emailExists && emailExists._id.toString() !== id) {
        return res.status(400).json({
          success: false,
          message: "Email already in use",
        });
      }
      user.email = email;
    }

    // Save updated user
    const updatedUser = await user.save();

    // Prepare response data (excluding sensitive information)
    const userData = {
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: userData,
    });
  } catch (err) {
    console.error("Update error:", err);

    // Handle duplicate key error (for username if you have unique constraint)
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update profile. Please try again.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

// delete User

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const DeletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Succesfully Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete User,Try again",
    });
  }
};

// get single User

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const User = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Succesfully fetched",
      data: User,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "User not Found",
    });
  }
};

// get all User

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json({
      success: true,
      message: "Succesfully fetched",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "No Users are created",
    });
  }
};



// get users Count

export const getUsercount = async (req, res) => {
    try {
      const Usercount = await User.estimatedDocumentCount();
      res.status(200).json({
        success: true,
        message: "Succesfully fetched",
        data: Usercount,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
          message: "Not fetched",

      });
    }
}

// Remove booking from user's mybooking array
export const removeUserBooking = async (req, res) => {
  const { userId, bookingId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { mybooking: bookingId } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking removed from user",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to remove booking from user",
      error: err.message,
    });
  }
};