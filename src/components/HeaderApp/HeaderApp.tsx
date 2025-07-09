import { NavLink } from 'react-router-dom';
import styles from './HeaderApp.module.scss'
import { Avatar, Flex, Layout } from 'antd';
import { ThemeColors } from '../ThemeColors/ThemeColors';
import { LanguageToggler } from '../LanguageToggler/LanguageToggler.tsx';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

export const HeaderApp = () => {
    const { isAuth } = useAppSelector(state => state.website);

    return (
        <Header>
            <Flex justify='space-between' align='center' style={{ width: '100%' }}>
                <LanguageToggler />
                <Flex gap='2rem'>
                    {
                        isAuth
                            ? (
                                <div className='link'>
                                    <Avatar size="small" icon={<UserOutlined />} />&nbsp;
                                    admin
                                </div>
                            ) : (
                                <NavLink
                                    to='/portfolio/login'
                                    className={({ isActive }) =>
                                        `link ${styles.link} ${isActive ? styles.active : ''}`
                                    }>
                                    Log in
                                </NavLink>
                            )
                    }
                    <ThemeColors />
                </Flex>
            </Flex>
        </Header>
    );
}
