import missionImg from "../../assets/images/about/mission.jpeg";
import visionImg from "../../assets/images/about/vision.webp";
import "../../styles/MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision">

      {/* Mission */}
      <div className="mv-row">
        <div className="mv-text">
          <h3>Our Mission</h3>
          <p>
            To deliver reliable, innovative, and affordable battery solutions
            that empower homes, businesses, and industries with uninterrupted
            power. We strive to simplify energy needs while maintaining the
            highest standards of quality and customer satisfaction.
          </p>
          <p>
            Our mission goes beyond supplying batteries — we focus on expert
            guidance, proper installation, and dependable after-sales support
            to ensure long-term performance and trust.
          </p>
        </div>

        <div className="mv-image">
          <img src={missionImg} alt="Our Mission" />
        </div>
      </div>

      {/* Vision */}
      <div className="mv-row reverse">
        <div className="mv-image">
          <img src={visionImg} alt="Our Vision" />
        </div>

        <div className="mv-text">
          <h3>Our Vision</h3>
          <p>
            To become one of the most trusted battery solution providers by
            delivering advanced, sustainable, and energy-efficient products
            that meet the evolving power needs of customers.
          </p>
          <p>
            We envision a future where reliable and sustainable energy is accessible
            to everyone. By embracing innovation and quality-driven solutions, Lucky
            Battery strives to lead the power industry while supporting long-term
            environmental responsibility and customer trust.
         </p> 
         <p>
            Through continuous innovation and customer-centric service, we are committed
            to building long-lasting relationships and powering progress across
            communities.
         </p>         
        </div>
      </div>

    </section>
  );
};

export default MissionVision;
