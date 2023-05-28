
//import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";

//import {createTheme} from '@mui/material/styles'
//import { useMemo } from 'react'
//import { useSelector } from 'react-redux'
//import { themeSettings } from './theme'
import Layout from "./scenes/layout";
import { Dashboard } from "./scenes/layout/dashboard";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import { ColorModeContext,useMode } from './theme';


function App() {
  const [ theme, colorMode] = useMode()
 //const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])


  return (
    <ColorModeContext.Provider value={colorMode}>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/dashboard" element={<Dashboard/> }/>

        </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </ColorModeContext.Provider>

  )
}

export default App
