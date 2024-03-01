import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useUserInterfaceDisplay, { INTER_FACE_KEY } from '../useUserInterfaceDisplay';

// Mocking the initUiObj
jest.mock('../../services/initConfig', () => ({
    initUiObj: {
        LOGIN_MODAL: false,
    },
}));

test('useUserInterfaceDisplay hook sets and updates user interface display state', () => {
    const TestComponent = () => {
        const { userInterfaceDisplay, setUserInterface } = useUserInterfaceDisplay();

        return (
            <div>
                <div data-testid="login-modal-state">{String(userInterfaceDisplay.LOGIN_MODAL)}</div>
                <button onClick={() => setUserInterface(INTER_FACE_KEY.LOGIN_MODAL, true)} data-testid="open-login-modal">
                    Open Login Modal
                </button>
                <button onClick={() => setUserInterface(INTER_FACE_KEY.LOGIN_MODAL, false)} data-testid="close-login-modal">
                    Close Login Modal
                </button>
            </div>
        );
    };

    render(<TestComponent />);

    // Initial state check
    expect(screen.getByTestId('login-modal-state')).toHaveTextContent('false');

    // Triggering state update
    act(() => {
        fireEvent.click(screen.getByTestId('open-login-modal'));
    });

    // State check after update
    expect(screen.getByTestId('login-modal-state')).toHaveTextContent('true');

    // Triggering another state update
    act(() => {
        fireEvent.click(screen.getByTestId('close-login-modal'));
    });

    // State check after the second update
    expect(screen.getByTestId('login-modal-state')).toHaveTextContent('false');
});