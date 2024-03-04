"use client"

import { useEffect, useState } from 'react';
import { useShopContext } from '@/services/providers/ShopContext';
import { INTER_FACE_KEY } from '@/hooks/useUserInterfaceDisplay';

import {
    Tooltip,
    Box,
    IconButton,
    Menu,
} from '@mui/material/';
import {
    AccountCircle,
    Person,
    ShoppingCart,
    Favorite
} from '@mui/icons-material/';

import ControllerMenuItem from './ControllerMenuItem';

export default function HeaderControllerIcon() {

    const { auth, cartAllQuantity, setUserInterface, toggleDrawer } = useShopContext();

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenLoginMenu = () => {
        setUserInterface(INTER_FACE_KEY?.LOGIN_MODAL, true)
    }

    return (
        <Box sx={{ display: 'flex', gap: '1rem', flexGrow: 0 }}>
            {auth?.accessToken ? (
                <Box >
                    <Tooltip title="Profilom">
                        <IconButton onClick={handleOpenUserMenu} size="large" color="inherit" className="p-0">
                            <AccountCircle
                                className='hover:text-primary-500'
                                fontSize="large"
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '55px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <ControllerMenuItem
                            handleCloseUserMenu={handleCloseUserMenu}
                        />
                    </Menu>
                </Box>
            ) : (
                <Tooltip className='cursor-pointer' title="Bejelentkezés">
                    <IconButton onClick={handleOpenLoginMenu} size="large" color="inherit" className="p-0">
                        <Person
                            className='hover:text-primary-500'
                            fontSize="large"
                        />
                    </IconButton>
                </Tooltip>
            )}
            <Tooltip className='cursor-pointer' title="Kedvenceim">
                <IconButton size="large" color="inherit" className="p-0">
                    <Favorite className='hover:text-primary-500' fontSize="large" />
                </IconButton>
            </Tooltip>

            <Tooltip title="Kosaram">
                <IconButton onClick={toggleDrawer('right', true)} size="large" color="inherit" className="p-0">
                    <ShoppingCart className='hover:text-primary-500' fontSize="large" />
                    {isClient && cartAllQuantity() != 0 ? <span className="w-7 h-7 flex flex-col items-center justify-center content-center absolute top-[-12px] right-[-5px] rounded-full shadow-lg text-xs font-bold bg-red-500 text-white">{cartAllQuantity()}</span> : null}
                </IconButton>
            </Tooltip>
        </Box>
    )
}
