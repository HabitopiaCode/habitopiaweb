import React from 'react'

type Props = {
    children: JSX.Element;
    bg?: string;
}

const index = (props: Props) => {
  const { bg } = props
  const newStyles = bg ? { background: bg } : {}
  return <div style={{ ...styles.card, ...newStyles }}>{props.children}</div>;
}

const styles = {
    card: {
        background: "#fff",
        padding: "10px",
        borderRadius: "15px",
        boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)"
    }
} as const

export default index