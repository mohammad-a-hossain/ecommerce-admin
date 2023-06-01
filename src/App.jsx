

import { useState } from 'react';
import { 
  Routes,
  Route
} from "react-router-dom";


import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from 'react-pro-sidebar';

import Sideber from "./components/Dashborad/Global/Sideber";



import  {Topbar } from './components/Dashborad/Global/Topbar';
import  {Dashboard } from "./components/Dashborad";

 import Contacts from "./components/Dashborad/Contacts";

// import Invoices from './components/Dashborad/Invoice';

 import Form from './components/Dashborad/Form'
// import Calendar from "./components/Dashborad/Calendar";
// import  Faq  from "./components/Dashborad/Faq";

// import Bar from './components/Dashborad/Bar'
// import Pie from "./components/Dashborad/Pie";

// import Line from './components/Dashborad/Line'
 
// import Geography  from "./components/Dashborad/Geography"
 import { AddCategory } from './components/Dashborad/AddCategory';
 import { AddSubCategory  } from './components/Dashborad/SubCategory'
 import { AddProduct } from './components/Dashborad/AddProduct';
import Login from "./components/Login";





const App =() => {
const [ theme, colorMode] = useMode()
const [isSidebar, setIsSidebar] =useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <div className="app">
   <ProSidebarProvider> 
    <Sideber isSidebar={isSidebar} />
   </ProSidebarProvider>
    

      <main className='content'>
      <Topbar/>
       <Routes>
       <Route exact path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addcategory' element={<AddCategory/>}/> 
    
      <Route path='/contacts' element={<Contacts/>}/> 
      
      <Route path='/subcategory' element={<AddSubCategory/>}/> 
      <Route path='/addproduct' element={<AddProduct/>}/> 
  
      <Route path='/form'element={<Form/>}/> 
      <Route path='/calender' element={'#$'}/> 
      <Route path='/faq' element={'#$'}/>  
        <Route path='/bar' element={'#$'}/>
        
      <Route path='/pie' element={'#$'}/>
   
      <Route path='/line' element={'#$'}/>
      
      <Route path='/geography' element={'#$'}/>
    
      </Routes> 
      </main>
    </div>   
     </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
