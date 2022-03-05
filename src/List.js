import React from 'react';

// consuming data from Data.js

const List = ({people}) => {
  return (
    <>
      <h2>list component</h2>
      {
        people.map((person) => { const {id, name, age, image} = person; 
        /*map people to person*/
        /*for every person, destructure the person object (dob shortcut)*/
        /*dob take in prperties of person*/
        return <article key={id} className='person'>
          <img src={image} alt={name}></img>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })
      }
    </>
  );
};

export default List;
