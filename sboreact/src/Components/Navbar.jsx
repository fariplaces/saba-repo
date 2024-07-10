

export const Navbar = (props) => {
  return (
    <div>
      <nav>
    <ul>
        <li><a href="#">{props.title}</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
</div>
  )
}
