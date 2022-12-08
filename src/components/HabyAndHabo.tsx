import React from 'react'
import haby from '../assets/haby.svg'
import habo from '../assets/habo.svg'

type Props = {}

const HabyAndHabo = (props: Props) => {
  return (
    <div className="haby_and_habo">
      <div>
        <img src={haby} alt="Haby" />
      </div>
      <div>
        <img src={habo} alt="Habo" />
      </div>
    </div>
  );
}

export default HabyAndHabo