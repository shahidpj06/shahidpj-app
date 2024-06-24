import styles from './SkillStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle' >Skills</h1>    
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML' />
            <SkillList src={checkMarkIcon} skill='CSS' />
            <SkillList src={checkMarkIcon} skill='Javascript' />
            <SkillList src={checkMarkIcon} skill='Bootstrap' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Python' />
            <SkillList src={checkMarkIcon} skill='Django' />
            <SkillList src={checkMarkIcon} skill='Django Rest' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='MySQL' />
            <SkillList src={checkMarkIcon} skill='PostgreSQL' />
            <SkillList src={checkMarkIcon} skill='Git' />
        </div>
    </section>
  );
}

export default Skills