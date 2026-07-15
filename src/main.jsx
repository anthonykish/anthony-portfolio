import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnthonyKishPortfolio from './anthony_kish_portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnthonyKishPortfolio />
  </StrictMode>,
)
