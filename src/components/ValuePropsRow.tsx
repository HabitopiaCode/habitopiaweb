import React from 'react'
import HabyButton from "./HabyButton";

type Props = {
  vp: {
      media: string;
      header: string;
      content: string;
      cta: string;
      reverse?: boolean;
  }
}

const ValuePropsRow = (props: Props) => {
  const { vp } = props;
  const newStyles = vp.reverse ? "reversed" : ""
  return (
    <div className="container">
      <div className={`value_prop ${newStyles}`}>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: vp.header }}></h3>
          <p>{vp.content}</p>
          <HabyButton location="#" minWidth={350}>
            {vp.cta}
          </HabyButton>
        </div>
        <div>
          <img src={vp.media} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ValuePropsRow