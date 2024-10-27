import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInSide from '../Components/SignInSide';
import SignUpSide from '../Components/SignUpSide';
import ForgotPassword from '../Components/ForgetPassword';

function DrawerRouting() {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="/signup" element={<SignUpSide />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
    </Routes>
  );
}

export default DrawerRouting;
