import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Around the U.S logo' className='logo' />
    </header>
  );
};

export default Header;
