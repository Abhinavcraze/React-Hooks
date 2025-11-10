import React from 'react'

function Title() {
  console.log('Rendering Title component  ')
  return (
    <h2>useCallback Hook Example</h2>
  )
}

export default React.memo(Title)