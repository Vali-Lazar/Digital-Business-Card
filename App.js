import './App.css';
import myPhoto from './my-photo.jpg';

function App() {
  return (
    <div>

      <div id='container'>

      <header>
        <img src={myPhoto} alt="My Photo" />
      </header>

      <main>
        <h2 className="name">Valentin Lazar</h2>
        <h4 className="job-info">Junior Frontend Developer</h4>
        <p className="small"> valentinlazar5@gmail.com</p>

        <a href='mailto:valentinlazar5@gmail.com' className="email" target="_blank" > <i class="fa fa-envelope"></i>Email</a>
        <a href='https://www.linkedin.com/in/valentin-lazar-7a84bb255/' className="linkedin" target="_blank"> <i class="fa fa-linkedin"></i> LinkedIn</a>
        
        <div  id="about">
          <h3>About</h3>
          <p>I am a junior frontend developer with a solid understanding of HTML, CSS, and JavaScript. I am skilled in developing responsive and user-friendly websites and applications using React. With a strong attention to detail and a focus on creating high-quality code, I am a collaborative team player eager to learn and grow as a developer.</p>

          <h3>Interest</h3>
          <p>My interest are web-design, new technologies, human behavior, psyhology and personal improvment.</p>
        </div>
      </main>

      <footer>
        <a href="https://twitter.com/ValiLazar22" target="_blank"><i class="fa fa-twitter"></i></a>
        <a href="https://www.instagram.com/lazar.vali/" target="_blank"><i class="fa fa-instagram"></i></a>
        <a href="https://github.com/Vali-Lazar" target="_blank"><i class="fa fa-github"></i></a>
      </footer>
      </div>





    </div>
  )
  
}

export default App;
