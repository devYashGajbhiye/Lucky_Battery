const HeroSlide = ({ slide }) => {
  return (
    <div className="hero-slide fade">
      <img
        src={slide.image}
        alt="Lucky Battery banner"
        loading="lazy"
        className="hero-image"
        width="1200"
        height="450"
      />

      {slide.showText && (
        <div className="hero-overlay">
          <h1>{slide.title}</h1>
          <h3>{slide.subtitle}</h3>
          <p>{slide.description}</p>
        </div>
      )}
    </div>
  );
};

export default HeroSlide;
