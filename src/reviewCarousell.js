import React, { useState, useEffect } from "react";
import "./reviewCarousell.css";

const ReviewCard = ({ review, isFading }) => (
  <div className={`review-card ${isFading ? "fade-out" : ""}`}>
    <div className="stars">
      {"★".repeat(review.rating)}
      {"☆".repeat(5 - review.rating)}
    </div>
    <p className="review-text">{review.text}</p>
    <div className="author-info">
      <div className="author-initial">{review.author[0].toUpperCase()}</div>
      <div>
        <p className="author-name">{review.author}</p>
        <p className="review-date">{review.date}</p>
      </div>
    </div>
    <img
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      alt="Google"
      className="google-logo"
    />
  </div>
);

const GoogleReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextReview = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsFading(false);
    }, 300);
  };

  const prevReview = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(nextReview, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <ReviewCard review={reviews[currentIndex]} isFading={isFading} />
      <button onClick={prevReview} className="nav-button prev-button">
        &#8249;
      </button>
      <button onClick={nextReview} className="nav-button next-button">
        &#8250;
      </button>
    </div>
  );
};

// Sample reviews data
const sampleReviews = [
  {
    rating: 5,
    text: "Prompt and smooth transaction with well versed experience. Recommended 👍",
    author: "vorm peer",
    date: "6 days ago",
  },
  {
    rating: 5,
    text: "Throughout the transaction, Edward was transparent and honest, and that gave me a peace of mind in purchasing this unit.",
    author: "Kris J",
    date: "3 years ago",
  },
  {
    rating: 5,
    text: "Excellent experience - Richard and Alan are responsive and a pleasure to deal with. Absolutely loving the car !",
    author: "Allen Tan",
    date: "1 day ago",
  },
];

const GoogleReviews = () => {
  return (
    <div>
      <h1 className="reviews-title">What our clients say!</h1>
      <GoogleReviewsCarousel reviews={sampleReviews} />
      <p className="powered-by">Powered by Web Wizards Wigets</p>
    </div>
  );
};

export default GoogleReviews;