import React from 'react'
import Json from 'react-json-syntax-highlighter'
import './style.css'

function App (props) {
  return (
    <div className='lblb-grand-format'>
      <strong>grand format</strong>
      <div>configuration</div>
      <Json obj={props} />
    </div>
  )
}

export default App
