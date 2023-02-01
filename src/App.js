import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Dashboard";
import { AppContext } from "./Components/ContextLib";

function App() {
  const [sidebarShow, setSidebarShow] = React.useState(true);

  return (
    <AppContext.Provider
      value={{
        sidebarShow,
        setSidebarShow,
      }}
    >
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Dashboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
