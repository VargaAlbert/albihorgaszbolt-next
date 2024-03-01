import { ChangeEvent } from 'react';
import useLocalStorage from './useLocalStorage';

/**
 * A hook for managing a boolean toggle state with local storage persistence.
 *
 * @param {string} key - The key for storing the toggle state in local storage.
 * @param {boolean} initValue - The initial value of the toggle.
 * @returns {[boolean, (event?: ChangeEvent<HTMLInputElement> | boolean) => void]} - A tuple containing the toggle state and a function to update it.
 * @example
 * const [isToggled, toggle] = useToggle('isDarkMode', false);
 */
const useToggle = (key: string, initValue: boolean): [boolean, (event?: ChangeEvent<HTMLInputElement> | boolean) => void] => {
  const [value, setValue] = useLocalStorage<boolean>(key, initValue);

  /**
   * Toggle function to update the boolean state.
   *
   * @param {ChangeEvent<HTMLInputElement> | boolean} event - The event or boolean value to set the toggle state.
   */
  const toggle = (event?: ChangeEvent<HTMLInputElement> | boolean) => {
    if (event && typeof event === 'boolean') {
      setValue(event);
    } else if (event && 'target' in event && 'checked' in event.target) {
      setValue(event.target.checked);
    } else {
      setValue((prev: boolean) => !prev);
    }
  };

  return [value, toggle];
};

export default useToggle;