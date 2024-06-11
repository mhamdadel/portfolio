import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function NavbarItemComponent({ item, isOpen }) {
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

  return (
    isOpen && (
      <motion.li
        className="w-full h-full"
        variants={navItem}
      >
        <motion.a
          href={item.href}
          className={`
          w-full h-full text-left px-3 py-3
          text-on-surface hover:opacity-70 inline-block
          ${
            item.current
              ? "font-bold bg-primary text-on-primary"
              : "font-normal hover:border-b-2 hover:border-primary hover:border-opacity-70 hover:text-opacity-70"
          }
        `}
          variants={navItem}
        >
          {item.name}
        </motion.a>
      </motion.li>
    )
  );
}

export default NavbarItemComponent;