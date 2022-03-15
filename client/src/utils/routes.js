import { Admin } from '../pages/Admin'
import { Auth } from '../pages/Auth'
import { Basket } from '../pages/Basket'
import { DevicePage } from '../pages/DevicePage'
import { MainPage } from '../pages/MainPage'
import { Shop } from '../pages/Shop'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  MAIN_PAGE_ROUTE,
  REGiSTRATION_ROUTE,
  SHOP_ROUTE,
} from './consts'

export const authRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: BASKET_ROUTE, Component: Basket },
]

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  { path: REGiSTRATION_ROUTE, Component: Auth },
  { path: SHOP_ROUTE, Component: Shop },
  { path: BASKET_ROUTE, Component: Basket },
  { path: DEVICE_ROUTE + '/:id', Component: DevicePage },
  { path: MAIN_PAGE_ROUTE, Component: MainPage },
]
