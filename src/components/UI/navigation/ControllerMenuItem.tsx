"use client"

import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShopContext } from '@/services/providers/ShopContext';
import ROLES_LIST from '@/services/rolesConfig';

import useLogout from '@/hooks/useLogouth';

import {
  Typography,
  MenuItem,
} from '@mui/material/';

type ControllerMenuItemPropT = {
  handleCloseUserMenu: () => void
}

export default function ControllerMenuItem({ handleCloseUserMenu }: ControllerMenuItemPropT) {

  const { auth } = useShopContext()

  const router = useRouter();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    router.push('/', undefined);
  }

  return (
    <>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Profilom</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Rendeléseim</Typography>
      </MenuItem>

      {auth.roles.includes(ROLES_LIST.Admin) && (
        <>
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href="/adminpage">
              <Typography textAlign="center">Editor Page</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href="/adminpage">
              <Typography textAlign="center">Admin Page</Typography>
            </Link>
          </MenuItem>
        </>
      )}

      {auth.roles.includes(ROLES_LIST.Editor) && (
        <MenuItem onClick={handleCloseUserMenu}>
          <Link href="/adminpage">
            <Typography textAlign="center">Editor Page</Typography>
          </Link>
        </MenuItem>
      )}

      <MenuItem onClick={handleCloseUserMenu}>
        <Typography onClick={signOut} textAlign="center">Kijelentkezés</Typography>
      </MenuItem>
    </>
  );
}  
