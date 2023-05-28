
//import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from '@mui/material/styles'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import Layout from "./scenes/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*  import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"; */
 

function App() {
 const mode = useSelector((state) => state.global.mode) 
 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])


  return (
    <div className="app">
    <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
        <Route element={<Layout/>}/>
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>

  )
}

export default App
