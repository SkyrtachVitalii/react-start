import './AsideMenu.scss';

function AsideMenu() {
  return (
    <div className="AsideMenu">
      <nav>
        <ul className='AsideMenu__List'>
          <li className='AsideMenu__Item'>Home</li>
          <li className='AsideMenu__Item'>Products</li>
          <li className='AsideMenu__Item'>Contacts</li>
          <li className='AsideMenu__Item'>Cabinet</li>
        </ul>
      </nav>
    </div>
  );
}

export default AsideMenu;