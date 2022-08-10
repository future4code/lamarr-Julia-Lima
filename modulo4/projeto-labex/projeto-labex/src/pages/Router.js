import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListTripsPage from './ListTripsPage';
import ApplicationFormPage from './ApplicationFormPage';
import LoginPage from './LoginPage';
import AdminHomePage from './AdminHomePage';
import TripDetailsPage from './TripDetailsPage';
import CreateTripPage from './CreateTripPage'

export function Router(){
    return (
        <BrowserRouter>
             <Routes>
                <Route index element={ <HomePage/> }/>
                <Route path="/trips/list" element={ <ListTripsPage/> }/>
                <Route path="/trips/application" element={ <ApplicationFormPage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/admin/trips/list" element={ <AdminHomePage/> }/>
                <Route path="/admin/trips/:id" element={ <TripDetailsPage/> }/>
                <Route path="/admin/trips/create" element={ <CreateTripPage/> }/>
             </Routes>
        </BrowserRouter>


    )
    
}