import React from 'react'

type Props = {
  vp: {
      media: string;
      header: string;
      content: string;
      cta: string;
  }
}

const ValuePropsRow = (props: Props) => {
  const { vp } = props;
  return (
    <div className="container">
      <div>
        <div>
          <h3>{vp.header}</h3>
          <p>{vp.content}</p>
          <a href="#">{vp.cta}</a>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ValuePropsRow