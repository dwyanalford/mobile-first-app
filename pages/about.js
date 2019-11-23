import '../global.css'
import Nav from '../components/nav'

export default function About() {
    return (
      <div>
        <Nav></Nav>
        <section id="about" className="container">
        <div className="content row">
          <div className="col-12 con-1">
            <h1>About Section</h1>
          </div>
        </div>
        <div className="content row">
          <div className="col-6 content-detail">
            <h1>Content 1 - Text</h1>
          </div>
          <div className="col-6 content-detail">
            <h1>Content 1 - Image</h1>
          </div>
        </div>
      </section>
      </div>
    );
  }
