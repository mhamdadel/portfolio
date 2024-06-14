import './ChangeThemeButtonComponent.css';
import useTheme from '../../hooks/useTheme';
import { useEffect, useState } from 'react';

export default function ChangeThemeButtonComponent() {
  const [theme, switchTheme] = useTheme();
  const [check, setCheck] = useState(theme === 'dark' ? true : false);

  useEffect (() => {
    setCheck(theme === 'dark' ? true : false);
  }, [theme]);

  return (
    <div id='ChangeThemeButtonComponent' className='items-center flex'>
      <input type="checkbox" id="darkmode-toggle" style={{
        width: '40px',
        height: '40px',
      }} onChange={switchTheme} checked={check} />
      <label htmlFor="darkmode-toggle" />
    </div>
  )
}
