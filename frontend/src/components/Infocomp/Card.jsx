import React from 'react'

const Card = (props) => {
  
  return (
        <div className="col-md-3 mb-4 mx-24">
          <div className="max-w-md rounded overflow-hidden shadow-lg" onClick={props.fn}>
            
            <img
              className="w-full blogimg"
              src={props.imgs}
              alt="Eye Health"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{props.title}</div>
              <p className="text-gray-700 text-base">
              {props.text}
              </p>
            </div>
          </div>
        </div>

    
  )
}

export default Card;