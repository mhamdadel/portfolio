import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTemperature } from "../../redux/actions/weatherActions";
import { useState } from "react";
import ChangeThemeButtonComponent from "../../components/ChangeThemeButton/ChangeThemeButtonComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItemComponent from "../../components/NavbarItemComponent/NavbarItemComponent";
import { setMenuItems } from "../../redux/actions";

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
  const temperature = useSelector((state) => state.weather.temperature);
  const currentPage = useSelector((state) => state.menu.currentPage);
  console.log(currentPage)
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentTemperature());
  }, [dispatch]);
  useEffect(() => {
    const navItems = menuItems.map((item) => ({
      ...item,
      current: item.name === currentPage,
    }))
    console.log(navItems)
    dispatch(setMenuItems(navItems));
  }, [currentPage]);

  return (
    <nav className="bg-surface sticky top-0 mb-5 text-on-surface h-12 flex justify-between items-center px-4">
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
        <ul className="hidden lg:flex h-full">
          {menuItems.map((item) => (
            <NavbarItemComponent key={item.name} isOpen={!isOpen} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex space-x-4 items-center">
        <ChangeThemeButtonComponent />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {temperature && <p>Temperature: {temperature}°C</p>}
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
              className="absolute top-12 left-0 right-0 bg-surface text-on-surface flex flex-col items-start space-y-1 p-4 z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navContainer}
            >
              {menuItems.map((item) => (
                <NavbarItemComponent
                  key={item.name}
                  isOpen={isOpen}
                  item={item}
                />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
