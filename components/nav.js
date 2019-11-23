// This is the Link API
import Link from 'next/link'

const Nav = () => (
  <div>
    <nav className="row">
        <div className="col-3">
        
        </div>
        <div className="col-9">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
    <style jsx>{`
    nav {
      background-color: black;
    }
    nav a {
      color: white;
      text-decoration: none;
    }
    `}</style>
  </div>
)
export default Nav