import React from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Quotation from "./Quotation/Quotation";
import UploadComplete from "./UploadComplete/UploadComplete";
import SignIn from "./SignIn/SignIn";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/UploadComplete" element={<UploadComplete />} /> */}
      </Routes>
    </>
  );
}

export default App;
