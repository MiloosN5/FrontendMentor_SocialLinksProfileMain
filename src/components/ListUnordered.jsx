import React from 'react'

const ListUnordered = ({items, types}) => {

  const classes = types.split(', ').map(type => `list--${type}`).join(' ');

  return (
    <ul className={classes}>
         {Object.entries(items).map(([key, {name, URL}], index) => (
            <li key={index}>
                <a href={URL}>{name}</a>
            </li>
        ))}
    </ul>
  )
}

export default ListUnordered