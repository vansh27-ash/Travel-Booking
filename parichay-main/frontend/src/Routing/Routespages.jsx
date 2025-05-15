import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResult from '../pages/SearchResult'
import Thankyou from '../pages/Thankyou';
import Mybookings from '../pages/Mybookings';
import UpdateUser from '../pages/UpdateUser'

const Routespages = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to= '/home' />}/>
          <Route path="/tours" element={<Navigate to= '/tour' />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/tour" element={<Tours />} />
            <Route path="/my-bookings" element={<Mybookings />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<Thankyou />} />
            <Route path="/home/tour/search" element={<SearchResult />} />
            <Route path="/edit-profile" element={<UpdateUser/>} />
        </Routes>

    );
}

export default Routespages