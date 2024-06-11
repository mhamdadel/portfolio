import StarfieldBackgroundComponent from '../components/StarfieldBackgroundComponent/StarfieldBackgroundComponent';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import { Outlet } from 'react-router-dom';

const RootComponent = () => {
  return (
    <>
      <StarfieldBackgroundComponent />
      <NavbarComponent />
      <Outlet />
    </>
  );
};

export default RootComponent;
