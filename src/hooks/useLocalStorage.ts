import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * A hook for managing state in local storage.
 *
 * @typeparam T - The type of the state value.
 * @param {string} key - The key for storing the state in local storage.
 * @param {T | (() => T)} initValue - The initial value or a function to compute the initial value.
 * @returns {[T, Dispatch<SetStateAction<T>>]} - A tuple containing the state value and a function to update it.
 * @example
 * const [count, setCount] = useLocalStorage("count", 0);
 */
const useLocalStorage = <T>(key: string, initValue: T | (() => T)) => {
    const [value, setValue] = useState<T>(() => {
        return getLocalValue(key, initValue);
    });

    // If the key or value changes, updates the item in local storage.
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
};

/**
 * Gets the local storage value or initializes it if not present.
 *
 * @typeparam T - The type of the value.
 * @param {string} key - The key for storing the value in local storage.
 * @param {T | (() => T)} initValue - The initial value or a function to compute the initial value.
 * @returns {T} - The local storage value.
 * @private
 */
const getLocalValue = <T>(key: string, initValue: T | (() => T)): T => {
    // SSR Next.js 
    if (typeof window === 'undefined') return initValue instanceof Function ? initValue() : initValue;

    // if a value is already stored 
    const localValue = JSON.parse(localStorage.getItem(key) || 'null') as T;
    if (localValue) return localValue;

    // return result of a function 
    if (initValue instanceof Function) return initValue();

    return initValue;
};

export default useLocalStorage;