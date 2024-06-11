import React, { useEffect, useState } from 'react';
import StarfieldBackgroundComponent from '../components/StarfieldBackgroundComponent/StarfieldBackgroundComponent';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import { Outlet } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Remove LoadingComponent after 3 seconds max
  }, []);

  return (
    <>
      {loading ? <LoadingComponent /> : null}
      <StarfieldBackgroundComponent />
      <NavbarComponent />
      <Outlet />
    </>
  );
};

export default RootComponent;
