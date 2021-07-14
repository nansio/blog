import React from 'react'

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>          
          <dt>{item.description}</dt>          
        </React.Fragment>
      ))}
    </dl>
  )
}

export default Glossary