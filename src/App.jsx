import React from 'react'
import Avatar1 from './assets/images/avatar-jessica.jpeg'
import Card from './components/Card';

const App = () => {
  const users = [
    { 
      name: 'Jessica Randall', 
      location: 'London, United Kingdom', 
      position: 'Front-end developer and avid reader.',
      picture: {
        src: Avatar1,
        alt: 'Avatar or image of person'
      },
      socials: {
        github: {
          name: 'Github',
          URL: 'https://www.google.com/'
        },
        frontendMentor: {
          name: 'Frontend Mentor',
          URL: 'https://www.google.com/'
        },
        linkedIn: {
          name: 'LinkedIn',
          URL: 'https://www.google.com/'
        },
        twitter: {
          name: 'Twitter',
          URL: 'https://www.google.com/'
        },
        instagram: {
          name: 'Instagram',
          URL: 'https://www.google.com/'
        },
      }
    }
  ];

  return (
    <div className='page'>
      <header className='sr-only'>
        <h1>Cards</h1>
        <p>Cards of developers info and links to their profiles on the external websites</p>
      </header>
      <main>
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </main>
    </div>
  )
}

export default App