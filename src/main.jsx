import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'
import CssBaseline from "@mui/material/CssBaseline"

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ThemeProvider>

)
