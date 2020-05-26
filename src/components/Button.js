import React from 'react'

export default function Button(props) {
  return (
    <div class="img">
      <button className="btn btn-info ml-3 text-center" onClick={props.onClick}>{props.name}</button>
    </div>
    
  )
}
