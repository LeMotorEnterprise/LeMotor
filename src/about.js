import React, { useState } from "react";
import "./about.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div className="accordion-item">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordion-button"
        >
          <span>{title}</span>
          <span
            className="accordion-icon"
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
            }}
          >
            +
          </span>
        </button>
        <div
          className="accordion-content"
          style={{
            maxHeight: isOpen ? "1000px" : "0",
          }}
        >
          <div className="accordion-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div className="car-options-section">
      <h1 className="section-title">Lease or buy used! It's better!</h1>
      <p className="section-subtitle">Click to expand</p>

      <div>
        <AccordionItem title="Renting a Car in Singapore">
          <h4 className="content-title">Benefits of Renting:</h4>
          <ul className="content-list">
            <li>Flexibility for short-term needs</li>
            <li>No long-term financial commitment</li>
            <li>Access to newer models</li>
            <li>Maintenance and insurance often included</li>
            <li>Ideal for tourists or temporary residents</li>
          </ul>
          <p>
            Renting a car in Singapore can be a great option if you need a vehicle for a short period or want to avoid the high costs of car ownership. It's particularly suitable for those who don't require a car daily or are unsure about their long-term transportation needs.
          </p>
        </AccordionItem>

        <AccordionItem title="Buying a Used Car in Singapore">
          <h4 className="content-title">Advantages of Buying Used:</h4>
          <ul className="content-list">
            <li>Lower initial cost compared to new cars</li>
            <li>Avoid steep depreciation of new vehicles</li>
            <li>More affordable Certificate of Entitlement (COE)</li>
            <li>Wide variety of models available including supercars</li>
            <li>Potential for resale value</li>
          </ul>
          <p>
            Purchasing a used car in Singapore can be a wise financial decision. With the high cost of new vehicles and rapid depreciation, a well-maintained used car offers significant savings. It's an excellent option for those who need regular access to a vehicle and are looking for a balance between cost and ownership.
          </p>
        </AccordionItem>

        <AccordionItem title="Factors to Consider">
          <h4 className="content-title">Key Considerations:</h4>
          <ul className="content-list">
            <li>Budget: Initial cost and long-term expenses</li>
            <li>Usage frequency: Daily commute vs. occasional use</li>
            <li>Duration of stay in Singapore</li>
            <li>Parking availability and costs</li>
            <li>Maintenance and potential repair costs</li>
            <li>Singapore's car ownership policies and COE system</li>
          </ul>
          <p>
            Whether you choose to rent or buy a used car in Singapore depends on your specific circumstances. Consider your budget, how often you'll need the car, and how long you plan to stay in Singapore. Also, factor in Singapore's unique car ownership policies, including the COE system, which can significantly impact the overall cost of owning a vehicle.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;