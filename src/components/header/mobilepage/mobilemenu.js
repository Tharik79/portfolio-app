

const MobileMenu = ({isOpen, setIsOpen}) => {
    return(
        <div className="mobile">
           <div className="closeicon" onClick={() => {setIsOpen(!isOpen)}}>
            <img src="https://img.icons8.com/tiny-color/32/000000/experimental-delete-sign-tiny-color.png" alt="close"/>
           </div> 
           <div className='mobilemenu'>
                <a href = "#project">
                
                </a>
                Projects
            </div>
            <div className='mobilemenu'>
                <a href = "#skills">
                
                </a>
                Skills
            </div>
            <div className='mobilemenu'>
                <a href = "#work">
                
                </a>
                work
            </div>
            <div className='mobilemenu'>
                <a href = "#skills">
               
                </a>
                Contact
            </div> 
        </div>
    )
}
export default MobileMenu;