import React from 'react'
type descriptionProp={
    description1:string
}

const AboutUsDescription:React.FC<descriptionProp>= ({description1}) => {
  return (
    <div>
        <p>{description1}</p>
    </div>
  )
}

export default AboutUsDescription