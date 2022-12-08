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
    <Card>
        <div>
            <div>
                {testimonial.avatar ? <img src={testimonial.avatar} /> : <img src={""} />}
                {`${testimonial.name}, ${testimonial.job}`}
            </div>
            <div>{testimonial.content}</div>
        </div>
    </Card>
  )
}

export default TestimonialCard