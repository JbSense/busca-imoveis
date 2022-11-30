import React from 'react'
import './index.css'

import CardHorizontal from '../UI/CardHorizontal'

function PropertiesList () {
  const properties = [
    {
      link: '/edit-properties',
      imagePath: 'images/asg5252.jpg',
      info: 'Paris - França'
    },
    {
      link: '/edit-properties',
      imagePath: 'images/asg5252.jpg',
      info: 'Paris - França'
    },
    {
      link: '/edit-properties',
      imagePath: 'images/asg5252.jpg',
      info: 'Paris - França'
    },
    {
      link: '/edit-properties',
      imagePath: 'images/asg5252.jpg',
      info: 'Paris - França'
    }
  ]

  const renderProperties = () => {
    return properties.map(property => {
      return <CardHorizontal
        link={property.link}
        imagePath={property.imagePath}
        info={property.info}
      />
    })
  }

  return (
    <div className='Properties-list'>
      {renderProperties()}
    </div>
  )
}

export default PropertiesList
