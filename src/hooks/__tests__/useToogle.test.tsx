import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import useToggle from '../useToggle';

describe('useToggle', () => {
    it('should toggle the state correctly', () => {
        const TestComponent = () => {
            const [isToggled, toggle] = useToggle('testToggle', false);

            return (
                <div>
                    <span data-testid="status">{isToggled ? 'Toggled On' : 'Toggled Off'}</span>
                    <button data-testid="toggleButton" onClick={() => toggle()}></button>
                </div>
            );
        };

        const { getByTestId } = render(<TestComponent />);

        // Initial state
        expect(getByTestId('status').textContent).toBe('Toggled Off');

        // Toggle the state
        fireEvent.click(getByTestId('toggleButton'));

        // Updated state
        expect(getByTestId('status').textContent).toBe('Toggled On');
    });
});
