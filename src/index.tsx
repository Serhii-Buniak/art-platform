import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux';
import store from './redux'
import { StyledEngineProvider } from '@mui/material/styles'
import "./translation";
import { Route, Routes } from 'react-router-dom'
import { Language, languageValues } from './translation'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback="Loading...">
        <StyledEngineProvider injectFirst>
          <Provider store={store}>
            <Routes>
              {languageValues.map((value) => (
                <Route
                  key={value}
                  path={`/${value}/*`}
                  element={<App lang={value} />}
                />
              ))}
              <Route
                path='*'
                element={<App lang={Language.Default} />}
              />
            </Routes>
          </Provider>
        </StyledEngineProvider>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
