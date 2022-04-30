// import './projects.css';
import Card from './card';
import './card.css';

const Projects = () => {

    return(
 <div className='projects'>
   <Card 
    imageUrl="https://thumbs.dreamstime.com/z/petunias-colorful-flowers-isolated-white-background-png-file-transparent-background-also-available-hanging-flowers-basket-163357943.jpg"
    title="Project 1"
    text="UserList CRUD Operations" 
    />
    <Card 
    imageUrl="https://png.pngtree.com/png-clipart/20190628/ourmid/pngtree-neon-effect-video-game-signboard-png-image_1516755.jpg"
    title="Project 2"
    text="UserList CRUD Operations" 
    />
    <Card 
    imageUrl="https://png.pngtree.com/png-clipart/20190628/ourmid/pngtree-neon-effect-video-game-signboard-png-image_1516755.jpg"
    title="Project 3"
    text="UserList CRUD Operations" 
    />
    <Card 
    imageUrl="https://png.pngtree.com/png-clipart/20190628/ourmid/pngtree-neon-effect-video-game-signboard-png-image_1516755.jpg"
    title="Project 4"
    text="UserList CRUD Operations" 
    />
 </div>
    );

  // const cardDetails = [
  //   {image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.codingninjas.com%2Fcourses%2Ffull-stack-web-dev-mern&psig=AOvVaw1YFLVB3USAAdENFz6J9hX3&ust=1649137550454000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiK8aba-fYCFQAAAAAdAAAAABAD", title: "Project 1", text: "This si project 1"},
  //   {image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.bitsrc.io%2Fbuild-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82&psig=AOvVaw1YFLVB3USAAdENFz6J9hX3&ust=1649137550454000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiK8aba-fYCFQAAAAAdAAAAABAK", title: "Project 2", text: "This is Project 2"},
  //   {image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.slideshare.net%2Frockncoder%2Freact-development-with-the-mern-stack&psig=AOvVaw1YFLVB3USAAdENFz6J9hX3&ust=1649137550454000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiK8aba-fYCFQAAAAAdAAAAABAa", title: "Project 3", text: "This is Project 3"},
  //   {image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bezkoder.com%2Freact-node-express-mongodb-mern-stack%2F&psig=AOvVaw1YFLVB3USAAdENFz6J9hX3&ust=1649137550454000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiK8aba-fYCFQAAAAAdAAAAABAg", title: "Project 4", text: "This is Project 4"},
  // ];


  // const cardList = (card, index) => {
  //   return (
     
  //       <div style={{ width: "18rem" }} key={index} className="card">
  //         <img class="card-img-top"   src={card.image}/>
  //         <div className='card-body'>
  //           <h5 className='card-title'>
  //             {card.title}
  //           </h5>
  //           <p className='card-text'>{card.text}</p>
  //         </div>

  //           {/* <Card.Title>{card.title}</Card.Title>
  //           <Card.Text>
  //            {card.text}
  //           </Card.Text>
           
  //         </Card.Body> */}
  //       </div>
      
  //   );
  // };

  //   return(
    
      
  //     <div className='grid'> {cardDetails.map(cardList)}</div>
  //   );
}
export default Projects;