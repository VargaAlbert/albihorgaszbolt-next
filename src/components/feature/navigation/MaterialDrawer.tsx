"use client"

import React from 'react';
import { useShopContext } from '@/services/providers/ShopContext';

import { Drawer, Paper } from '@mui/material';

export default function TemporaryDrawer({ children }: {
    children: React.ReactNode;
}) {
    const { userInterfaceDisplay, toggleDrawer } = useShopContext();

    return (
        <div>
            {(['left', 'right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={userInterfaceDisplay.DRAWER[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <Paper className='bg-background-primary h-full' >
                            {children}
                        </Paper>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
