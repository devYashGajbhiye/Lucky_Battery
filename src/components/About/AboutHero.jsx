import heroImage from "../../assets/images/about/about-hero.jpg";
import "../../styles/AboutHero.css";

const AboutHero = ({ title, subtitle }) => {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="about-hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default AboutHero;
