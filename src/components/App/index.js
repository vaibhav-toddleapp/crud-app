import React, { useState, useEffect } from "react";

import Login from "../Login";
import Dashboard from "../Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <Dashboard setIsAuthenticated={setIsAuthenticated} />
    </>
  );
};

export default App;
