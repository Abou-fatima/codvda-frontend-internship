import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Formulaire envoyé :', formData);
    setSubmitted(true);
    // Réinitialiser après 3 secondes
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="contact-hero">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p className="subtitle">Nous sommes là pour répondre à vos questions</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Coordonnées */}
            <motion.div
              className="contact-info"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Nos coordonnées</h2>
              <ul className="info-list">
                <li>
                  <span className="icon">📧</span>
                  <a href="mailto:support@alphatech.com">support@alphatech.com</a>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <span>+224 611 54 62 68</span>
                </li>
                <li>
                  <span className="icon">📍</span>
                  <span>Guinea</span>
                </li>
                <li>
                  <span className="icon">🔗</span>
                  <a href="https://www.linkedin.com/in/alphadev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <span className="icon">🌐</span>
                  <a href="#" target="_blank" rel="noopener noreferrer">www.alphatech.com</a>
                </li>
              </ul>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              className="contact-form"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Envoyez-nous un message</h2>
              {submitted && (
                <div className="success-message">
                  Merci ! Nous vous répondrons bientôt.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}