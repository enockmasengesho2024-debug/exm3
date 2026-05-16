function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>Learning Material</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#materials">Materials</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="tag">React Home Page</p>
          <h2>Simple learning tools for student success.</h2>
          <p>
            Learning Material is a branded React home page designed to support
            students with study tools, review activities, and digital learning
            resources.
          </p>
          <a href="#materials" className="btn">View Materials</a>
        </div>
      </section>

      <section id="materials" className="section">
        <h2>Learning Materials</h2>

        <div className="cards">
          <div className="card">
            <h3>Study Support</h3>
            <p>
              Simple learning tools help students understand lessons clearly
              and improve step by step.
            </p>
          </div>

          <div className="card">
            <h3>Review Activities</h3>
            <p>
              Helpful review questions allow students to practice, prepare for
              quizzes, and build confidence in class.
            </p>
          </div>

          <div className="card">
            <h3>Digital Resources</h3>
            <p>
              Online links and materials give students extra support for
              studying at home or at school.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <h2>About Learning Material</h2>
        <p>
          Learning Material is an educational website created with React. It
          provides useful study content, review support, and digital resources
          to help learners improve their understanding and succeed in school.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: student@example.com</p>
      </section>

      <footer className="footer">
        <p>© 2026 Learning Material. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;