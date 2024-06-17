import React from 'react'
import ImageCard from './ImageCard'
import ListUnordered from './ListUnordered'

const Card = ({ user }) => {
    return (
        <article className='card'>
            <header className='card__introduction'>
                <ImageCard 
                    src={user.picture.src} 
                    alt={user.picture.alt} 
                />
                <div>
                    <h2>{user.name}</h2>
                    <p className='text--location'>{user.location}</p>
                </div>
                <p>"{user.position}"</p>
            </header>
            <nav className='card__links'>
                <ListUnordered 
                    items={user.socials} 
                    types='accent, unordered' 
                />
            </nav>
        </article>
    )
}

export default Card