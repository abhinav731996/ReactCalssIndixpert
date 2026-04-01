import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "./Rb.css";
import { RouterProvider } from "react-router-dom";
// import { routes } from './routes/DataModeRoutes'
import { routes } from "./routes/frontroutes/RBRoutes";
import { UserContext } from "./context/Context";
import UserProvider from "./context/providers/UserProvider";
import WishlistProvider from "./context/providers/WishlistProvider";

function App() {
  return (
    <>
      <UserProvider>
        <WishlistProvider>
        <RouterProvider router={routes} />

        </WishlistProvider>
      </UserProvider>
    </>
  );
}

export default App;
