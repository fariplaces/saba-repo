
import PropTypes from 'prop-types'

export const Navbar = (props) => {
  return (
    <div><nav>
    <ul>
      <li><a href="#home">{props.title}</a></li>
      <li><a href="#about">{props.AboutText}</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav></div>
  )
}
export default Navbar

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
}
Navbar.applyDefaultProps ={
    title: 'My Webpage',
    AboutText: 'About My Webpage',
}