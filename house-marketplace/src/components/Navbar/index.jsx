import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg';
import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg';
import routes from '../../routes';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function isPathMatchRoute(route) {
    return location.pathname === route;
  }

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li
            className='navbarListItem'
            onClick={() => navigate(routes.explore.path)}
          >
            <ExploreIcon
              fill={
                isPathMatchRoute(routes.explore.path) ? '#2c2c2c' : '#8f8f8f'
              }
              width='36px'
              height='36px'
            />
            <p
              className={
                isPathMatchRoute(routes.explore.path)
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          <li
            className='navbarListItem'
            onClick={() => navigate(routes.offers.path)}
          >
            <OfferIcon
              fill={
                isPathMatchRoute(routes.offers.path) ? '#2c2c2c' : '#8f8f8f'
              }
              width='36px'
              height='36px'
            />
            <p
              className={
                isPathMatchRoute(routes.offers.path)
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offer
            </p>
          </li>
          <li
            className='navbarListItem'
            onClick={() => navigate(routes.profile.path)}
          >
            <PersonOutlineIcon
              fill={
                isPathMatchRoute(routes.profile.path) ? '#2c2c2c' : '#8f8f8f'
              }
              width='36px'
              height='36px'
            />
            <p
              className={
                isPathMatchRoute(routes.profile.path)
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
