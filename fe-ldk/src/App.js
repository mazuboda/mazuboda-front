import React from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Quotation from "./Quotation/Quotation";
import UploadComplete from "./UploadComplete/UploadComplete";
import SignIn from "./SignIn/SignIn";
import SignUpSelect from "./SignUpSelect/SignUpSelect";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Quotation />} />
        <Route path="/UploadComplete" element={<UploadComplete />} />
        <Route path="/Quotation" element={<Quotation />} />
        <Route path="/SignUpSelect" element={<SignUpSelect />} />
      </Routes>
    </>
  );
}

export default App;
