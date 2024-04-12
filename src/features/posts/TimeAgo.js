import {parseISO, formatDistanceToNow} from 'date-fns'

import React from 'react'

const TimeAgo = ({ timestamp }) => { 
  let timeAgo = ""

  if(timestamp){
    const time = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(time)
    timeAgo = `${timePeriod} ago`

  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo