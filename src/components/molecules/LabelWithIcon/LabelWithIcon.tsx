import React from 'react'
import Image from '../../atoms/Image'
import Typography from '../../atoms/Typography/Typography'

const LabelWithIcon = ({imgSrc,text}) => {
  return (
    <div>
      <Image imgSrc={imgSrc}/>
      <Typography>{text}</Typography>
    </div>
  )
}

export default LabelWithIcon