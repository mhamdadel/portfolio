import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const useTheme = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    const [theme, setTheme] = useLocalStorage('theme', null);
  
    useEffect(() => {
      if (theme === null) {
        const initialTheme = defaultDark ? 'dark' : 'light';
        setTheme(initialTheme);
        applyTheme(initialTheme);
      } else {
        applyTheme(theme);
      }
    }, [defaultDark, setTheme, theme]);
  
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      applyTheme(newTheme);
    };
  
    return [theme, switchTheme];
  };
  
  export default useTheme;