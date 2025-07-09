import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // === Scroll Reveal ===
    const reveals = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    // === Canvas Particles ===
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,182,193,0.6)';
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div>
      <header className="navbar">
        <h1>Agnes</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* 🌸 Hero Majestik */}
      <section className="hero-section">
        <div className="hero-bg-canvas-wrapper">
          <canvas id="bg-canvas"></canvas>
        </div>
        <div className="hero-content">
          <h2 className="hero-title">
            <img src="/agnes-logo.jpg" alt="Agnes Logo" className="hero-logo" />
            Hello, I’m Agnes Hagata Panjaitan
          </h2>
          <p>Front-end Developer & 3D Pixel Artist</p>
          <a href="#contact" className="glow-btn">Let’s Talk</a>
        </div>
      </section>

      <main className="content-container">
        <section id="about" className="reveal about-section">
          <h3>🌷 About Me</h3>
          <p>
            Passionate in crafting beautiful, responsive 3D pixel arts with cute designs.
            My design speaks in soft tones and bold energy.
            I am 18 y/o and I'm a student at Satya Terra Bhinneka University.
            My hobby is to sleep 💤💤💤
          </p>
        </section>

        <section id="projects" className="reveal projects-section">
          <h3>🧁 Featured Projects</h3>
          <div className="projects">
            {[
              { title: "Nebulix", desc: "A Blog/Article Website That You Can Use To Share Your Knowledge About Space." },
              { title: "My Portfolio", desc: "Minimalist portfolio concept with percise explanations." },
              { title: "Classy", desc: "My future plan to make a website to help with making a simple class website." }
            ].map((proj, i) => (
              <div key={i} className="project-card">
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="reveal contact-section">
          <h3>💌 Contact</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />
            <button type="submit" className="glow-btn">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Agnes • JA</p>
      </footer>
    </div>
  );
}

export default App;