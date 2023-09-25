import './AsideMenu.scss';
import { NavLink } from 'react-router-dom';

function AsideMenu() {
  return (
    <div className="AsideMenu">
      <nav>
        <ul className='AsideMenu__List'>
          <li className='AsideMenu__Item'><NavLink to="/" className="AsideMenu__Link" activeclassname="active">Home</NavLink></li>
          <li className='AsideMenu__Item'><NavLink to="/products" className="AsideMenu__Link" activeclassname="active">Products</NavLink></li>
          <li className='AsideMenu__Item'><NavLink to="/contacts" className="AsideMenu__Link" activeclassname="active">Contacts</NavLink></li>
          <li className='AsideMenu__Item'><NavLink to="/cabinet" className="AsideMenu__Link" activeclassname="active">Cabinet</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default AsideMenu;