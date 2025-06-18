import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Button, Layout, Flex } from 'antd';

const { Footer } = Layout;

export const FooterApp = () => {
    return (
        <Footer>
            <Flex gap='10px' justify='center'>
                <a
                    href='https://www.instagram.com/catmart24'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button shape='circle' icon={<FaInstagram/>}/>
                </a>
                <a
                    href='https://www.linkedin.com/in/ihor-holohots-1610a2171'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button shape='circle' icon={<FaLinkedinIn/>}/>
                </a>
                <a
                    href='https://github.com/HolohotsIhor'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button shape='circle' icon={<FaGithub/>}/>
                </a>
            </Flex>
        </Footer>
    );
}
