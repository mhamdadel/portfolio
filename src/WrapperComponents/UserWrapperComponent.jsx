import { useEffect, useState } from 'react';
import StarfieldBackgroundComponent from '../components/StarfieldBackgroundComponent/StarfieldBackgroundComponent';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import { Outlet } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
// import ScrollProgressComponent from '../components/ScrollProgressComponent/ScrollProgressComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import Adkar from '../utils/adkar';
import ScrollTopButtonComponent from '../components/ScrollTopButtonComponent/ScrollTopButtonComponent';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <ScrollProgressComponent /> */}
      {loading ? <LoadingComponent /> : null}
      <Adkar />
      <ScrollTopButtonComponent />
      <StarfieldBackgroundComponent />
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default RootComponent;
