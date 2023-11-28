import { IRoute } from '../models/IRoute';
import { RouteNames } from './routeNames';
import Study from '../pages/Study/Study';
import PrivateCommunity from '../pages/PrivateCommunity/PrivateCommunity';
import Auth from '../pages/Auth/Auth';
import Payment from '../pages/Payment/Payment';
import Profile from '../pages/Profile/Profile';
import Info from '../pages/Info/Info';


export const publicRoutes: IRoute[] = [
   { path: RouteNames.STUDY, element: Study }
]
    
export const privateRoutes: IRoute[] = [
   { path: RouteNames.AUTH, element: Auth },
   { path: RouteNames.STUDY, element: Study },
   { path: RouteNames.PRIVATECOMMUNITY, element: PrivateCommunity },
   { path: RouteNames.PAYMENT, element: Payment },
   { path: RouteNames.PROFILE, element: Profile },
   { path: RouteNames.INFO, element: Info }
]