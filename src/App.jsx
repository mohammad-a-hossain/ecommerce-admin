import { useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";

import Sideber from "./components/Dashborad/Global/Sideber";

import { Topbar } from "./components/Dashborad/Global/Topbar";
import { Dashboard } from "./components/Dashborad";

import Contacts from "./components/Dashborad/Contacts";

// import Invoices from './components/Dashborad/Invoice';

import Form from "./components/Dashborad/Form";
// import Calendar from "./components/Dashborad/Calendar";
// import  Faq  from "./components/Dashborad/Faq";

// import Bar from './components/Dashborad/Bar'
// import Pie from "./components/Dashborad/Pie";

// import Line from './components/Dashborad/Line'

// import Geography  from "./components/Dashborad/Geography"
import { AddCategory } from "./components/Dashborad/AddCategory";
import { AddSubCategory } from "./components/Dashborad/SubCategory";
import { AddProduct } from "./components/Dashborad/AddProduct";
import Login from "./Login";
import Register from "./register";
import Profile from "./components/Users/Profile";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./layout/dashboardLayout";
import { AuthLayout } from "./layout/AuthLayout";

//import { Provider } from 'react-redux'
//import store from '../store.js'

const App = () => {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  //let router = useParams();
  //console.log(router);
  const location = useLocation();

  // console.log(
  //   location.pathname !== "/login" || location.pathname !== "/register",
  //   location.pathname
  // );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {location.pathname === "/" || location.pathname !== "*" ? (
            <AuthLayout>
              <Routes>
                <Route exact path="/" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
              </Routes>
            </AuthLayout>
          ) : (
            <DashboardLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/dashboard/addcategory"
                  element={<AddCategory />}
                />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/subcategory" element={<AddSubCategory />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/form" element={<Form />} />
                <Route path="/calender" element={"#$"} />
                <Route path="/faq" element={"#$"} />
                <Route path="/bar" element={"#$"} />

                <Route path="/pie" element={"#$"} />

                <Route path="/line" element={"#$"} />

                <Route path="/geography" element={"#$"} />
              </Routes>
            </DashboardLayout>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
