import { act, render } from '@testing-library/react';
import React, { useEffect } from 'react';
import useLocalStorage from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  it('should store a number in local storage and retrieve it correctly', () => {

    let storedNumber: number | undefined;

    const TestComponent = () => {
      const [number, setNumber] = useLocalStorage('testNumber', 42);
      // Simulate changing the stored value
      useEffect(() => {
        setNumber(84);
      }, [setNumber]);
      // Read the stored value for verification
      useEffect(() => {
        storedNumber = number;
      }, [number]);

      return null;
    };

    act(() => {
      render(<TestComponent />);
    });

    // Verify if the key and value are correct in local storage
    const storedValue = localStorage.getItem('testNumber');
    expect(storedValue).not.toBeNull();
    expect(storedNumber).toBe(84);
  });

  it('should store a string in local storage and retrieve it correctly', () => {
    let storedString: string | undefined;

    const TestComponent = () => {
      const [text, setText] = useLocalStorage('testText', 'initialText');

      // Simulate changing the stored value
      useEffect(() => {
        setText('updatedText');
      }, [setText]);

      // Read the stored value for verification
      useEffect(() => {
        storedString = text;
      }, [text]);

      return null;
    };

    act(() => {
      render(<TestComponent />);
    });

    // Verify if the key and value are correct in local storage
    const storedValue = localStorage.getItem('testText');
    expect(storedValue).not.toBeNull();
    expect(storedString).toBe('updatedText');
  });

  it('should store an object in local storage and retrieve it correctly', () => {
    let storedObject: { key: string } | undefined;

    const TestComponent = () => {
      const [obj, setObj] = useLocalStorage('testObject', { key: 'initialValue' });

      // Simulate changing the stored value
      useEffect(() => {
        setObj({ key: 'updatedValue' });
      }, [setObj]);

      // Read the stored value for verification
      useEffect(() => {
        storedObject = obj;
      }, [obj]);

      return null;
    };

    act(() => {
      render(<TestComponent />);
    });

    // Verify if the key and value are correct in local storage
    const storedValue = localStorage.getItem('testObject');
    expect(storedValue).not.toBeNull();
    expect(storedObject).toEqual({ key: 'updatedValue' });
  });
});

