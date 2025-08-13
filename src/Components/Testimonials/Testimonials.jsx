import React, { useState } from "react";
import "./Testimonials.css";
import backarrow from "../../Assets/backarrow.png";
import leftarrow2 from "../../Assets/leftarrow2.png";
import user1 from "../../Assets/user1.jpeg";
import user2 from "../../Assets/user2.jpeg";
import user3 from "../../Assets/user3.jpg";
import user4 from "../../Assets/user4.jpg";

const testimonials = [
  {
    img: user1,
    name: "John Doe",
    location: "Boma Homes, Nairobi",
    text: "Working with Supreme company was an absolute pleasure from start to finish. They were professional, transparent, and always kept me updated throughout the project. The team delivered high-quality work on time and within budget, paying attention to every detail. I was especially impressed with their dedication to safety and cleanliness on site. Our home/office looks even better than we imagined, and the craftsmanship is outstanding. I would confidently recommend them to anyone looking for reliable and skilled builders.",
  },
  {
    img: user2,
    name: "John Doe",
    location: "Boma Homes",
    text: "Working with Supreme company was an absolute pleasure from start to finish. They were professional, transparent, and always kept me updated throughout the project. The team delivered high-quality work on time and within budget, paying attention to every detail. I was especially impressed with their dedication to safety and cleanliness on site. Our home/office looks even better than we imagined, and the craftsmanship is outstanding. I would confidently recommend them to anyone looking for reliable and skilled builders.",
  },
  {
    img: user3,
    name: "John Doe",
    location: "Boma Homes, Nairobi",
    text: "Working with Supreme company was an absolute pleasure from start to finish. They were professional, transparent, and always kept me updated throughout the project. The team delivered high-quality work on time and within budget, paying attention to every detail. I was especially impressed with their dedication to safety and cleanliness on site. Our home/office looks even better than we imagined, and the craftsmanship is outstanding. I would confidently recommend them to anyone looking for reliable and skilled builders.",
  },
  {
    img: user4,
    name: "John Doe",
    location: "Boma Homes, Nairobi",
    text: "Working with Supreme company was an absolute pleasure from start to finish. They were professional, transparent, and always kept me updated throughout the project. The team delivered high-quality work on time and within budget, paying attention to every detail. I was especially impressed with their dedication to safety and cleanliness on site. Our home/office looks even better than we imagined, and the craftsmanship is outstanding. I would confidently recommend them to anyone looking for reliable and skilled builders.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.ceil(testimonials.length / 2) - 1;

  const slideforward = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : prev));
  };
  const slidebackward = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const translateX = -(current * 50); // Move by 50% for each "page"

  return (
    <div className="testimonials-container">
      <img
        src={backarrow}
        alt=""
        className="next-btn"
        onClick={slidebackward}
      />
      <img
        src={leftarrow2}
        alt=""
        className="back-btn"
        onClick={slideforward}
      />
      <div className="slider">
        <ul
          style={{
            transform: `translateX(${translateX}%)`,
            transition: "0.5s",
          }}
        >
          {testimonials.map((t, idx) => (
            <li key={idx}>
              <div className="slide">
                <div className="user-info">
                  <img src={t.img} alt="" className="user-img" />
                  <div className="name-location">
                    <h3>{t.name}</h3>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
