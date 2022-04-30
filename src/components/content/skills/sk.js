
import SkData from './skData';
import Card from './skCard';
import  './skills.css';

const Skills = ()  => {
    
    const datas = SkData.map((data) => {
        return(
            <div className='card'>
            <Card className="data" key={data.key}
            image={data.image}
            />
            </div>
            
        )
    })

    return(
        <div className='sk-cards'>
            {datas}
        </div>
    )
}
export default Skills;