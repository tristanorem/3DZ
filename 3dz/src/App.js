import React from "react";
import { Routes,Route } from "react-router-dom";

import Home  from "./routes/Home";
import Modelado from "./routes/Modelado";
import Contact from "./routes/Contact"

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Home />}   />
          <Route path='/Modelado' element={ <Modelado />}   />
          <Route path='/Contact' element={ <Contact />}   />
      </Routes>
    </>
  );
}

export default App;
