import React, { memo, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setCurrentPage } from "../../redux/actions";

// eslint-disable-next-line react/prop-types, react/display-name
const NavbarItemComponent = memo(({ item }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentPage = useSelector((state) => state.menu.currentPage);

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -1000 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));
  }, [location.pathname]);

  console.log(currentPage)
  return (
    <motion.li className="w-auto h-full" variants={navItem}>
      <Link
        to={item.href}
        onClick={() => dispatch(setCurrentPage(item.href))}
        className={`
          w-full h-full text-left px-3 py-3
          text-on-surface hover:opacity-70 inline-block
          ${
            currentPage === item.href
              ? "font-bold bg-primary text-on-primary"
              : "font-normal hover:border-b-2 hover:border-primary hover:border-opacity-70 hover:text-opacity-70"
          }
        `}
      >
        {item.name}
      </Link>
    </motion.li>
  );
});

export default NavbarItemComponent;
