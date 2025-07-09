import { Steps, Typography } from 'antd';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiJavascript, SiRedux, SiSass, SiStylus, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';

const { Text } = Typography;
const techList = [
    { icon: <FaReact title="React" color="#61DBFB" /> },
    { icon: <SiRedux title="Redux" color="#764abc" /> },
    { icon: <SiTypescript title="TypeScript" color="#007acc" /> },
    { icon: <SiJavascript title="JavaScript" color="#f7df1e" /> },
    { icon: <FaHtml5 title="HTML5" color="#e34c26" /> },
    { icon: <FaCss3Alt title="CSS3" color="#2965f1" /> },
    { icon: <SiTailwindcss title="Tailwind CSS" color="#38bdf8" /> },
    { icon: <FaGitAlt title="Git" color="#f05030" /> },
    { icon: <FaGithub title="GitHub" color="black" /> },
    { icon: <SiSass title="SASS / SCSS" color="#cd6799" /> },
    { icon: <SiStylus title="Stylus" color="#333" /> },
    { icon: <SiBootstrap title="Bootstrap" color="#563d7c" /> },
];

export const SkillsExperience = () => {
    const { language, languages } = useAppSelector(state => state.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    const items = currentDataLang.SKILLS.EXPERIENCE.map(item => ({
        title: item.TITLE,
        description: <div dangerouslySetInnerHTML={{ __html: item.DESCRIPTION }} />
    }));

    return (
        <>
            <SectionTitle text={currentDataLang.SKILLS.TITLE}/>
            <motion.div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 20,
                    fontSize: 32,
                    marginBottom: 32,
                }}
                initial="hidden"
                animate="visible"
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
            {
                items ? (
                    <Steps
                        direction="vertical"
                        current={0}
                        items={items}
                    />
                ) : (
                    <Text type="danger">No experience data...</Text>
                )
            }
        </>
    );
}
