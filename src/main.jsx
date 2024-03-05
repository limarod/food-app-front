import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "styled-components"
import theme from "./styles/theme"
import GlobalStyles from './styles/global'
import {Routes} from './routes/index'
import {AuthProvider} from "./hooks/auth"
import {HandleQuantityProvider} from "./hooks/quantityDishContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <AuthProvider>
      <HandleQuantityProvider>
        <Routes />
      </HandleQuantityProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
