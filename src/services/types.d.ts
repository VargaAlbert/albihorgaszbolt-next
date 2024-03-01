type uiKeyT = {
    [key: string]: string
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type DrawerState = {
    [key in Anchor]: boolean;
};

type uiObjT = {
    LOGIN_MODAL: boolean;
    DRAWER: DrawerState;
}

type authT = {
    user: string;
    roles: number[];
    accessToken: string;
}

type userT = {
    refreshToken: string[];
    username: string;
    roles: {
        User: number;
        Editor?: number | null | undefined;
        Admin?: number | null | undefined;
    };
    password: string;
}

type productT = {
    productid: string;
    product: string;
    description: string;
    img: string;
    price: number;
    category: string;
}

type filterT = {
    category?: string
}

type CartItemT = {
    id: string;
    quantity: number;
};