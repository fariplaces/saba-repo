
import PropTypes from 'prop-types'

export const  Navbar2=(props) =>{
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">{props.title}</a></li>
          <li><a href="#about">{props.AboutText}</a></li>
          <li><a href="#services">{props.AboutServices}</a></li>
          <li><a href="#contact">{props.AboutContact}</a></li> 
        </ul>
      </nav>
    </div>
  )
}

export default Navbar2;
Navbar2.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  AboutServices: PropTypes.string.isRequired,
  AboutContact: PropTypes.string.isRequired,
};
Navbar2.defaultProps ={
  title: 'My Webpage',
  AboutText: 'About Us',
  AboutServices: 'Services',
  AboutContact: 'Contact',
}
