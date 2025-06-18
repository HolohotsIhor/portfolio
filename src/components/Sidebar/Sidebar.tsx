import React, { useState } from 'react';
import { Nav } from '../Nav/Nav.tsx';
import { FavoritesList } from '../FavoritesList/FavoritesList.tsx';
import { Layout, Drawer, Grid, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const screens = useBreakpoint();
    const isResponsive = !screens.xl;

    const menuContent = (
        <>
            <Nav />
            <FavoritesList />
        </>
    );

    return (
        <>
            {isResponsive? (
                <>
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setOpen(true)}
                        style={{ position: 'fixed', left: 16, top: 16, zIndex: 1001 }}
                    />
                    <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        placement="left"
                    >
                        {menuContent}
                    </Drawer>
                </>
            ) : (
                <Sider style={siderStyle} width={240}>
                    {menuContent}
                </Sider>
            )}
        </>
    );
};
