import { FiSettings } from "react-icons/fi"
import { GrHomeRounded } from "react-icons/gr"
import { useLocation } from "react-router-dom"
import * as S from "./styles"

const NAVIGATION_PATHS = {
  HOME: "/",
  SETTINGS: "settings",
}

const Navbar = () => {
  const { pathname: currentPage } = useLocation()

  return (
    <S.Header>
      <S.StyledNavbar>
        <h1>Address Book</h1>
        {currentPage === NAVIGATION_PATHS.HOME && (
          <S.StyledLink to={NAVIGATION_PATHS.SETTINGS}>
            <S.NavLink>
              <FiSettings />
              <S.NavLinkText>Settings</S.NavLinkText>
            </S.NavLink>
          </S.StyledLink>
        )}
        {currentPage === `/${NAVIGATION_PATHS.SETTINGS}` && (
          <S.StyledLink to={NAVIGATION_PATHS.HOME}>
            <S.NavLink>
              <GrHomeRounded />
              <S.NavLinkText>Home</S.NavLinkText>
            </S.NavLink>
          </S.StyledLink>
        )}
      </S.StyledNavbar>
    </S.Header>
  )
}

export default Navbar
