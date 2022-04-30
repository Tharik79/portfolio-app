
import './skillData.js';
import './skills.css';
import { SkillsData } from './skillsData.js';
import {SkillCard} from './skillCard.js';

const Skills = () => {

    const data = SkillsData;
    return(
        <div className="skills">

            <label className="section-name">Skills</label>
            <div className="skill-container">
                {data.map((item) => {
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return <SkillCard skill={skill} />;
                                } ) };
                            </div>
                        </div>        
                    );
                })}
            </div>
        </div>
    );
}
export default Skills;


