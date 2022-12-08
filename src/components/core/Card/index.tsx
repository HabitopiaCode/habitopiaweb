import React from 'react'

type Props = {
    children: JSX.Element;
}

const index = (props: Props) => {
  return (
    <div style={styles.card}>{props.children}</div>
  )
}

const styles = {
    card: {
        background: "#fff"
    }
} as const

export default index