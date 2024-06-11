import { render, fireEvent } from '@testing-library/react';
import ChangeThemeButtonComponent from './ChangeThemeButtonComponent';

const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key],
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
    };
  })();
  
  // Mock window.localStorage
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });
  
  // Your test
  test('renders theme toggle button and checks localStorage', () => {
    const { getByLabelText } = render(<ChangeThemeButtonComponent />);
  
    const checkbox = getByLabelText('Dark Mode Toggle');
    expect(checkbox.checked).toBe(false);
  
    fireEvent.click(checkbox);
  
    expect(checkbox.checked).toBe(true);
  
    expect(localStorage.getItem('theme')).toBe('dark');
  });
  