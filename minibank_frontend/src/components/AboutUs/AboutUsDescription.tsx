import React from 'react'
type descriptionProp={
    description1:string
}

const AboutUsDescription:React.FC<descriptionProp>= ({description1}) => {
  return (
    <div>
        <p className='medium-text-bold py-10'>{description1}</p>
    </div>
  )
}

export default AboutUsDescription