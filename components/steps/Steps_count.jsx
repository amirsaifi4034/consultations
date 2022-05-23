import React from 'react'

export const Steps_count = (props) => {
  return (
    <>
        <h5 className='fw-bold'>{props.stepsCount.step_status}</h5>
        <p>{props.stepsCount.step_detail}</p>
    </>
  )
}

export default Steps_count;