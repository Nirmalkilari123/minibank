import React from 'react'
type HomeProp={
    heading:string;
}
const Heading:React.FC<HomeProp>= ({heading}) => {
  return (
    <div>
        <h3 className='py-5 text-center'>{heading}</h3>
    </div>
  )
}

export default Heading