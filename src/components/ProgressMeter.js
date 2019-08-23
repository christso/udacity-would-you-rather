import React from 'react';

export default function ProgressMeter({ progressPercent }) {
  return (
    <div className='meter'>
      <div className='meter-progress' style={{ width: progressPercent + '%'}}>{progressPercent + '%'}</div>
    </div>
  )
}