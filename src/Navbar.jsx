import reactLogo from './assets/react-icon-small.png'

function Navbar() {
  return (
      <nav>
        <img src={ reactLogo } className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
      </nav>
  )
}

export default Navbar