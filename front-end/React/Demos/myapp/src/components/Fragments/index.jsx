import React from 'react'
import Glossary from './glossary'

class MultiFragments extends React.Component {
  render() {
    const terms = [
      {
        id:23605,
        term: 'Lavina Blanda',
        description: 'Aut optio quam consequatur.'
      },
      {
        id:33123,
        term: 'Ellen Bosco MD',
        description: 'Maxime sequi inventore..'
      },
      {
        id:93148,
        term: 'Kaia Terry',
        description: 'Velit quia natus est.'
      }
    ]
    return (
      <>
        <h1>这个组件(MultiFragments)内容使用的是Fragments短语法返回的！</h1>
        <Glossary items={terms} />
      </>
    )
  }
}

export default MultiFragments