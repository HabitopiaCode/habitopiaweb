import React from 'react'
import Card from "./core/Card/";

type Props = {
    testimonial: {
    avatar?: string;
    content: string;
    name: string;
    job: string;
    color: string;
    }
}

const TestimonialCard = (props: Props) => {

    const { testimonial } = props
  return (
    <Card bg={testimonial.color}>
      <div className="testimonial">
        <div>
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt="Testimonial Avatar" />
          ) : (
            <img src={""} alt="Testimonial Avatar" />
          )}
          <p>{`${testimonial.name}, ${testimonial.job}`}</p>
        </div>
        <div>
          <p>{testimonial.content}</p>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard