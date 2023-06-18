import MainNavLogo from '../../static/images/MainNavLogo'
import HeaderStyled from './HeaderStyled'
import LanguageSwitcher from './LanguageSwitcher'
import NavElement from './navigation/NavElement'
import Navigation from './navigation/Navigation'
import ThemeSwitcher from './ThemeSwitcher'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <div className='header-container'>
        <MainNavLogo link=''/>
        <Navigation />
        <div className='tools-wrapper'>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header