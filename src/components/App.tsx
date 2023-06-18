import cls from './App.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import AppEnum from '../redux/app/ThemeEnum'
import { ThemeProvider } from 'styled-components'
import { Theme, darkTheme, lightTheme } from '../styles/theme'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getTheme } from '../redux/app/appSelectors'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import { Language } from '../translation'
import { appActions } from '../redux/app/appReducer'
import { useEffect } from 'react'
import MainPage from './main/mainPage'
import LouvrePage from './main/louvrePage'
import RubensMuseumPage from './main/rubensMuseumPage.tsx'
import BritishMuseumPage from './main/britishMuseumPage'

interface AppProps {
  lang: Language
}

const App: React.FC<AppProps> = ({ lang }) => {
  const dispatch = useAppDispatch()

  const themeName = useAppSelector(getTheme)
  let theme: Theme
  switch (themeName) {
    case AppEnum.Light:
      theme = lightTheme
      break;
    case AppEnum.Dark:
      theme = darkTheme
      break;
  }
  useEffect(() => {
    dispatch(appActions.setLanguage(lang))
  }, [lang])

  return (
    <ThemeProvider theme={theme}>
      <div className={cls.App}>
 
        <Header />
        <Routes>

          <Route
            path='/'
            element={<MainPage />}
          />
          <Route
            path='/main'
            element={<Navigate to={lang === Language.Default ? "/" : `/${lang}`} />}
          />
          <Route
            path='/index.html'
            element={<Navigate to={lang === Language.Default ? "/" : `/${lang}`} />}
          />


          <Route
            path='/louvre'
            element={<LouvrePage />}
          />


          <Route
            path='/rubens'
            element={<RubensMuseumPage />}
          />

          <Route
            path='/british'
            element={<BritishMuseumPage />}
          />


          <Route
            path='*'
            element={<NotFound />}
          />

        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
