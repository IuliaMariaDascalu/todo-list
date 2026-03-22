import { Outlet } from 'react-router-dom';
import SideMenu from '../Layout/SideMenu/Sidemenu'
import { LayoutWrapper, MainContent } from './Layout.styles';

export default function Layout() {

    return (
        <LayoutWrapper>
            <SideMenu />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutWrapper>
    );

}