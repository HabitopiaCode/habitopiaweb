import React from 'react'

type Props = {
  children: string;
  location: string;
  bg_color?: string;
  txt_color?: string;
  maxWidth?: number;
};

const HabButton = (props: Props) => {
  const { maxWidth } = props
  const setWidth = maxWidth ? { maxWidth: `${maxWidth}px`} : {}
  return (
    <a href="https://ossrab6i4qi.typeform.com/to/L2OsMtPa" className="haby_button" style={setWidth}>
        {props.children}
    </a>
  )
}

export default HabButton