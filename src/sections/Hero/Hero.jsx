import styles from './HeroStyles.module.css';
import heroImg from '../../assets/shahid.png';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import CV from '../../assets/Shahid_P_J_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const instagramIcon = theme === 'light' ? instagramDark : instagramLight;
  
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                src={heroImg} 
                className={styles.hero}
                alt="Profile picture of Shahid P J" 
            />
            <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="color mode icon" 
            onClick={toggleTheme}
            />
        </div>    
        <div className={styles.info}>
            <h1>Shahid P J</h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/shahidpj06/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="https://github.com/shahidpj06" target='_blank'>
                    <img src={githubIcon} alt="GitHub icon" />
                </a>
                <a href="https://www.instagram.com/shahh.id_/" target='_blank'>
                    <img src={instagramIcon} alt="GitHub icon" />
                </a>
            </span>
            <p className={styles.description}>
            Passionate Python developer specializing in Django, crafting dynamic web solutions with precision and creativity.
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;