import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useInput from '../useInput';

test('useInput should update input value and reset correctly', () => {
    let componentValue: string | undefined;
    let componentReset: (() => void) | undefined;
    let componentInputAttributes: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } | undefined;

    const TestComponent: React.FC = () => {
        [componentValue, componentReset, componentInputAttributes] = useInput('testKey', 'initial');
        return null;
    };

    act(() => {
        render(<TestComponent />);
    });

    // Check initial values
    expect(componentValue).toBe('initial');
    expect(componentReset).toBeDefined();
    expect(componentInputAttributes).toBeDefined();

    // Update input value
    act(() => {
        componentInputAttributes?.onChange({ target: { value: 'updated' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(componentValue).toBe('updated');

    // Reset input value
    act(() => {
        componentReset?.();
    });

    expect(componentValue).toBe('initial');
});