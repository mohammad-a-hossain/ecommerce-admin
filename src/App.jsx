

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
//import { ProSidebarProvider } from 'react-pro-sidebar';
//import { useState } from 'react';
import { 
  Routes,
  Route
} from "react-router-dom";
//import  Sideber  from './components/Dashborad/Global/Sideber';
import  {Navbar } from './component/Navbar';
import  {Dashboard } from "./component/Dashboard";
// import{ Team }from './components/Dashborad/Team'

// import Contacts from "./components/Dashborad/Contacts";

// import Invoices from './components/Dashborad/Invoice';

// import Form from './components/Dashborad/Form'
// import Calendar from "./components/Dashborad/Calendar";
// import  Faq  from "./components/Dashborad/Faq";

// import Bar from './components/Dashborad/Bar'
// import Pie from "./components/Dashborad/Pie";

// import Line from './components/Dashborad/Line'
 
// import Geography  from "./components/Dashborad/Geography"
 



const App =() => {
const [ theme, colorMode] = useMode()
//const [isSidebar, setIsSidebar] =useState(true)
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <div className="app">
  {/*  <ProSidebarProvider> 
    <Sideber isSidebar={isSidebar} />
   </ProSidebarProvider> */}
    
      <main className='content'>
      <Navbar/>
      <Routes>
    <Route path='/' element={<Dashboard/>}/>
    
  
  
    </Routes> 
      </main>
    </div>   
     </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App






























//import './App.css'
/* import { CssBaseline, ThemeProvider } from "@mui/material";

import Layout from "./scenes/layout";
import { Dashboard } from "./scenes/layout/dashboard";
import {  Route ,Routes } from "react-router-dom";
import { ColorModeContext,useMode } from './theme';
import { Navbar } from './component/Navbar';


function App() {
  const [ theme, colorMode] = useMode()
 //const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])


  return (
    <ColorModeContext.Provider value={colorMode}>
    
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/dashboard" element={<Dashboard/> }/>

        </Routes>
    </ThemeProvider>
  
    </ColorModeContext.Provider>

  )
}

export default App
 */