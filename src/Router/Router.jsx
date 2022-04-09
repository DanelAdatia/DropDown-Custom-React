import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
