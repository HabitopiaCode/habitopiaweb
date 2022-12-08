import React from 'react'

type Props = {
  children: string;
  location: string;
  bg_color?: string;
  txt_color?: string;
};

const HabiButton = (props: Props) => {
  return (
    <a href="#">
        {props.children}
    </a>
  )
}

export default HabiButton