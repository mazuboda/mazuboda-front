import React from "react";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Quotation from "./Quotation/Quotation";
import UploadComplete from "./UploadComplete/UploadComplete";
import SignIn from "./SignIn/SignIn";
import SignUpSelect from "./SignUpSelect/SignUpSelect";
import SignUpCompany from "./SignUpCompany/SignUpCompany";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpCompany />} />
        <Route path="/UploadComplete" element={<UploadComplete />} />
        <Route path="/Quotation" element={<Quotation />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUpSelect" element={<SignUpSelect />} />
        <Route path="/SignUpCompany" element={<SignUpCompany />} />
      </Routes>
    </>
  );
}

export default App;
