import React from 'react'

type Props = {
  children: string;
  location: string;
  bg_color?: string;
  txt_color?: string;
  minWidth?: number;
};

const HabButton = (props: Props) => {
  const { minWidth } = props
  const setWidth = minWidth ? { minWidth: `${minWidth}px`} : {}
  return (
    <a href="https://ossrab6i4qi.typeform.com/to/L2OsMtPa" className="haby_button" style={setWidth}>
        {props.children}
    </a>
  )
}

export default HabButton