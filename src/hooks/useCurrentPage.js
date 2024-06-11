import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useCurrentPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return currentPage;
};

export default useCurrentPage;