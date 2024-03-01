import { ChangeEvent } from 'react';
import useLocalStorage from './useLocalStorage';

/**
 * A custom hook for managing input state.
 *
 * @param {string} key - The key for storing the input value.
 * @param {string} initValue - The initial value of the input.
 * @returns {[string, () => void, { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }]}
 *   A tuple containing the current input value, a function to reset the input, and input attributes.
 * @example
 * const [name, resetName, nameInputAttrs] = useInput('name', 'John');
 */
const useInput = (key: string, initValue: string): 
[string, () => void, { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }] => {

  const [value, setValue] = useLocalStorage(key, initValue);

  /**
   * Reset the input value to the initial value.
   */
  const reset = (): void => setValue(initValue);

  /**
   * Input attributes to be spread on the input element.
   */
  const inputAttributes = {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value),
  };

  return [value, reset, inputAttributes];
};

export default useInput;

