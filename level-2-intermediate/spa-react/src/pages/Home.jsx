import { motion } from 'framer-motion';
// Importe le fichier CSS principal pour le style (on l'ajoutera après)
import './Home.css'; // On va créer ce fichier pour les styles spécifiques à l'accueil

// Données pour les statistiques
const stats = [
  { value: '1,800+', label: 'Happy Interns' },
  { value: '200+', label: 'Stipend Scholars' },
  { value: '20+', label: 'Clients' },
];

// Données pour les services
const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications designed for performance, user experience, and business growth.',
  },
  {
    title: 'AI/ML Solutions',
    description: 'Intelligent solutions that leverage artificial intelligence and machine learning to drive insights and automation.',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating intuitive and powerful mobile applications that connect businesses with their customers anytime, anywhere.',
  },
];

// Données pour les témoignages
const testimonials = [
  {
    name: 'Rachel Salvi',
    role: 'Python Development Intern',
    quote: 'I’m happy to share that I’ve completed my internship at Codveda, where I had the opportunity to expand my skills and gain hands-on experience. Thank you to everyone who made this journey enriching and inspiring!',
  },
  {
    name: 'Lakshmi Akshaya Perla',
    role: 'Java Development Intern',
    quote: 'I’m happy to share that I’ve successfully completed my Java Development internship at Codveda Technologies! This experience enhanced my skills in Core Java, OOPs, and real-time project development. Grateful to the Codveda team for their support and guidance throughout the journey.',
  },
];

// Variantes d'animation (optionnel pour un effet de délai)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Section Héro */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Empowering Growth with IT Innovation</h1>
          <p className="subheadline">Transforming Education, Careers & Technology</p>
          <p className="description">
            Empowering students and freshers with internships, training, and industry ready projects plus IT services for growing businesses.
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos programmes
          </motion.button>
        </motion.div>
      </section>

      {/* Section Statistiques */}
      <section className="stats-section">
        <motion.div 
          className="stats-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="stat-item" variants={itemVariants}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section À propos / Mission */}
      <section className="about-mission">
        <div className="container">
          <h2>Innovative Solutions, Exceptional Results</h2>
          <p>
            At Codveda Technologies, we are dedicated to delivering innovative IT solutions that drive growth and success for our clients. Our main goal is to provide a genuine learning platform where students and freshers can explore, practice, and build confidence in real-world industry.
          </p>
        </div>
      </section>

      {/* Section Services */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">What We Offer</p>
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} className="service-card" variants={itemVariants}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Students success stories</h2>
          <motion.div 
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="testimonial-card" variants={itemVariants}>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}