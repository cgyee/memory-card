import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img 
                className="card--image"
                onClick={()=> props.onClick()}
                src={props.value.src} 
                alt="" 
            />
        </div>
    )
}
export default Card