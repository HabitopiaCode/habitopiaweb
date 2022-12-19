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
          <HabyButton analyticsName={"'" + vp.cta+ "' button"} location="#" maxWidth={300}>
            {vp.cta}
          </HabyButton>
        </div>
        <div>
          <img style={{maxWidth: "340px", borderRadius: 15}} src={vp.media} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ValuePropsRow