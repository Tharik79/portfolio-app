import Card from './projectCard';
import { ProjectData } from './projectData';
import './pro.css';


const MyProject = () => {
    const details = ProjectData.map((detail) => {
        return(
            <div className='card'>
                <h2>My Project</h2>
                <Card ClassName="detail" key={detail.key}
                image={detail.imageUrl}
                title={detail.title} 
                
                link={detail.link}
                />
            </div>
        )
    })
    return(
        <div className='project-cards'>
            {details}
        </div>
    )
}
   
export default MyProject;

