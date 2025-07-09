import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import {
    SiBootstrap,
    SiJavascript,
    SiMongodb,
    SiRedux,
    SiSass,
    SiStylus,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';
import styles from './TechList.module.scss';

const techList = [
    { icon: <FaReact title='React' color='#61DBFB' /> },
    { icon: <SiRedux title='Redux' color='#764abc' /> },
    { icon: <SiTypescript title='TypeScript' color='#007acc' /> },
    { icon: <SiJavascript title='JavaScript' color='#f7df1e' /> },
    { icon: <FaHtml5 title='HTML5' color='#e34c26' /> },
    { icon: <FaCss3Alt title='CSS3' color='#2965f1' /> },
    { icon: <SiTailwindcss title='Tailwind CSS' color='#38bdf8' /> },
    { icon: <FaGitAlt title='Git' color='#f05030' /> },
    { icon: <FaGithub title='GitHub' color='black' /> },
    { icon: <SiSass title='SASS / SCSS' color='#cd6799' /> },
    { icon: <SiStylus title='Stylus' color='#333' /> },
    { icon: <SiBootstrap title='Bootstrap' color='#563d7c' /> },
    { icon: <SiMongodb title='MongoDB' color='#47A248' /> },
];

export const TechList = () => {
    return (
        <motion.div
            className={styles.container}
            initial='hidden'
            animate='visible'
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            {techList.map((tech, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: {opacity: 0, scale: 0.8},
                        visible: {opacity: 1, scale: 1}
                    }}
                    transition={{duration: 0.4, type: 'spring'}}
                >
                    {tech.icon}
                </motion.div>
            ))}
        </motion.div>
    );
}
