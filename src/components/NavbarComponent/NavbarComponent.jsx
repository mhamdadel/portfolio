import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTemperature } from "../../redux/actions/weatherActions";
import ChangeThemeButtonComponent from "../ChangeThemeButtonComponent/ChangeThemeButtonComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItemComponent from "../../components/NavbarItemComponent/NavbarItemComponent";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const navContainer = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.menuItems);
  // const temperature = useSelector((state) => state.weather.temperature);
  // const loading = useSelector((state) => state.weather.loading);
  // const error = useSelector((state) => state.weather.error);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentTemperature());
  }, [dispatch]);

  const navItems = useMemo(() => {
    return Object.entries(menuItems).map(([href, item]) => (
      <NavbarItemComponent
        key={href}
        isOpen={isOpen}
        item={{ ...item, href }}
      />
    ));
  }, [menuItems, isOpen]);

  return (
    <>
      <nav className="bg-surface sticky top-0 text-on-surface h-12 flex px-4 z-40 mb-5">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className=" h-12 flex justify-between items-center">
            <img src={logoImage} alt="logo" className="h-24 w-24" />
          </Link>
          <div className="flex items-center space-x-4 h-full">
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-on-surface hover:text-primary focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
            <ul className="hidden lg:flex h-full">{navItems}</ul>
          </div>
          <div className="flex space-x-4 items-center">
            <ChangeThemeButtonComponent />
            {/* {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {temperature && <p>Temperature: {temperature}°C</p>} */}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="lg:hidden fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={navContainer}
              >
                <motion.ul
                  className="absolute top-12 left-0 right-0 bg-surface text-on-surface flex flex-col items-start space-y-1 p-4 z-50 w-full"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={navContainer}
                >
                  {navItems}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
