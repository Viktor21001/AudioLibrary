import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    AUDIO_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    ACCOUNT_ROUTE,
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import AudioPage from "./pages/AudioPage";
import Account from "./pages/Account";

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: AUDIO_ROUTE + '/:id',
        Component: AudioPage
    },
]
