function App() {
  const siteName = "Learning Material";

  const materials = [
    {
      title: "Study Support",
      description:
        "Simple learning tools that help students understand lessons clearly and improve step by step."
    },
    {
      title: "Review Activities",
      description:
        "Helpful review questions allow students to practice, prepare for quizzes, and build confidence in class."
    },
    {
      title: "Digital Learning Resources",
      description:
        "Online links and materials give students extra support for studying at home or at school."
    },
    {
      title: "About Learning Material",
      description:
        "Learning Material is an educational website designed to support students with useful study tools. It provides lesson guides, review activities, and digital resources to help learners improve their understanding and succeed in school."
    }
  ];

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const [formMessage, setFormMessage] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormMessage(
      "Thank you for contacting Learning Material. We will respond soon!"
    );

    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div>
      <nav className="navbar">
        <h2>{siteName}</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#materials">Materials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to {siteName}</h1>
          <p>
            An educational website designed to support students with useful study tools.
          </p>
          <a href="#materials" className="btn">View Materials</a>
        </div>
      </section>

      <section id="materials" className="materials-section">
        <h2>Learning Materials</h2>

        <div className="card-container">
          {materials.map((material) => (
            <div className="card" key={material.title}>
              <h3>{material.title}</h3>
              <p>{material.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message"
          ></textarea>

          {formMessage && (
            <p className="success-message">{formMessage}</p>
          )}

          <button type="submit">Send </button>
        </form>
      </section>

      <footer>
        <p>&copy; 2026 {siteName}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);