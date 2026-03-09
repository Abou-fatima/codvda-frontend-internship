import { motion } from 'framer-motion';
import './About.css';

// Données pour les valeurs (optionnel)
const values = [
  {
    title: 'Innovation',
    description: 'Nous repoussons les limites de la technologie pour offrir des solutions créatives et performantes.',
  },
  {
    title: 'Excellence',
    description: 'Nous visons l’excellence dans chaque projet, en garantissant qualité et fiabilité.',
  },
  {
    title: 'Apprentissage',
    description: 'Nous croyons en l’apprentissage continu et offrons une plateforme pour développer les talents de demain.',
  },
];

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Section Héro */}
      <section className="about-hero">
        <motion.div
          className="container"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Innovative Solutions, <br />Exceptional Results</h1>
          <p className="lead">
            At Codveda Technologies, we are dedicated to delivering innovative IT solutions that drive growth and success for our clients.
          </p>
        </motion.div>
      </section>

      {/* Section Mission */}
      <section className="mission-section">
        <div className="container">
          <h2>Notre Mission</h2>
          <p>
            Our main goal is to provide a genuine learning platform where students and freshers can explore, practice, and build confidence in real-world industry. Nous combinons expertise technique et pédagogie pour former les acteurs de demain.
          </p>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="values-section">
        <div className="container">
          <h2>Nos Valeurs</h2>
          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Chiffres (optionnel, on peut reprendre les stats de l'accueil) */}
      <section className="stats-about">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>1,800+</h3>
              <p>Happy Interns</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Stipend Scholars</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}