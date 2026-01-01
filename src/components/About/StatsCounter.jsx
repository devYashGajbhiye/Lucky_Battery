import { useEffect, useState } from "react";
import { FaCalendarAlt, FaUsers, FaTools } from "react-icons/fa";
import "../../styles/StatsCounter.css";

const statsData = [
  {
    icon: <FaCalendarAlt />,
    title: "Experience",
    label: "Years of Industry Excellence",
    value: 15,
  },
  {
    icon: <FaUsers />,
    title: "Customers",
    label: "Satisfied Clients Served",
    value: 2500,
  },
  {
    icon: <FaTools />,
    title: "Installations",
    label: "Completed Installations",
    value: 4200,
  },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = Math.ceil(end / (duration / 30));

      return setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(intervals[index]);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="stats">
      {/* Section Header */}
      <div className="stats-header">
        <h2>Our Achievements</h2>
        <p>
          Delivering reliable medical equipment solutions backed by trust,
          expertise, and proven results.
        </p>
      </div>

      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>

            {/* Card Title */}
            <span className="stat-title">{stat.title}</span>

            <h3>{counts[index]}+</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
