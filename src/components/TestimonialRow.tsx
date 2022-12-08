import React from 'react'
import TestimonialCard from "./TestimonialCard";

type Props = {
  testimonials: {
      avatar?: string;
      content: string;
      name: string;
      job: string;
      color: string;
    }[];
};

const TestimonialRow = (props: Props) => {
  return (
    <div className="container">
      <div className="testimonial_row">
        <TestimonialCard testimonial={props.testimonials[0]} />
        <TestimonialCard testimonial={props.testimonials[1]} />
      </div>
    </div>
  );
}

export default TestimonialRow