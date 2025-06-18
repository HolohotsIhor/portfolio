import { Flex, Layout } from 'antd';
import { ThemeColors } from '../ThemeColors/ThemeColors';
import { LanguageToggler } from '../LanguageToggler/LanguageToggler.tsx';
import { NavLink } from 'react-router-dom'; // <-- исправил здесь
import { useTypedSelector } from '../../hooks/useRedux.ts';

const { Header } = Layout;

export const HeaderApp = ({ colorBgContainer }) => {
    const { isAuth } = useTypedSelector(state => state.website);

    return (
        <Header style={{ background: colorBgContainer }}>
            <Flex justify='space-between' align='center' style={{ width: '100%' }}>
                <LanguageToggler />
                <Flex gap='2rem'>
                    {
                        isAuth
                            ? (
                                <div>admin</div>
                            ) : (
                                <NavLink to='/portfolio/login' className='link'>
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
