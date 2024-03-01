import { useState } from "react";

/**
 * @fileOverview Custom React hook for managing UI states.
 * @module useUserInterfaceDisplay
 */

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type DrawerState = {
    [key in Anchor]: boolean;
};

type uiObjT = {
    LOGIN_MODAL: boolean;
    DRAWER: DrawerState;
}

export interface UseUserInterfaceDisplayInterface {
    setUserInterface: (key: string, value: boolean) => void;
    toggleDrawer: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    userInterfaceDisplay: uiObjT;
}

/**
 * Object containing keys for UI interfaces.
 */
export const INTER_FACE_KEY: uiKeyT = {
    LOGIN_MODAL: "LOGIN_MODAL",
    DRAWER: "DRAWER"
}

export const initUiObj: uiObjT = {
    LOGIN_MODAL: false,
    DRAWER: {
        top: false,
        left: false,
        bottom: false,
        right: false,
    },
}

/**
 * Hook for managing UI states.
 * @returns {object} userInterfaceDisplay - Object containing UI states.
 * @returns {function} setUserInterface - Function to update UI states.
 * @example
 * const { userInterfaceDisplay, setUserInterface } = useUserInterfaceDisplay();
 * setUserInterface(INTER_FACE_KEY.LOGIN_MODAL, true);
 */
const useUserInterfaceDisplay = () => {
    const [userInterfaceDisplay, setUserInterfaceDisplay] = useState<uiObjT>(initUiObj);
    
    /**
     * Updates UI states based on the provided key and value.
     * @param {string} key - UI interface key.
     * @param {boolean} value - UI interface value.
     */
    const setUserInterface = (key: string, value: boolean): void => {
        setUserInterfaceDisplay({
            ...userInterfaceDisplay,
            [key]: value,
        });
    };

     /**
     * Toggles the drawer state for the specified anchor.
     * @param {Anchor} anchor - Drawer anchor.
     * @param {boolean} open - Whether to open or close the drawer.
     */
     const toggleDrawer =
     (anchor: Anchor, open: boolean) =>
     (event: React.KeyboardEvent | React.MouseEvent) => {
             if (
                 event.type === 'keydown' &&
                 ((event as React.KeyboardEvent).key === 'Tab' ||
                     (event as React.KeyboardEvent).key === 'Shift')
             ) {
                 return;
             }

             setUserInterfaceDisplay({
                ...userInterfaceDisplay,
                DRAWER: {
                    ...userInterfaceDisplay.DRAWER,
                    [anchor]: open
                }
            });
         };


    return { userInterfaceDisplay, setUserInterface, INTER_FACE_KEY, toggleDrawer };
}

export default useUserInterfaceDisplay;
