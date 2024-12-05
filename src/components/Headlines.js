import React from 'react'
import News from './News';

const Headlines = (props) => {
  return (
    <div>
        <News newsSection='top-headlines' apiKey={props.apiKey} pageSize={props.pageSize} />
    </div>
  )
}

export default Headlines