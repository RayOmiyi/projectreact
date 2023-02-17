import React from 'react';

const List = ({info}) => {

  
   
  return (
    <section>
      {
        info.map((infinix)=>{
          const {id,name,age,image} = infinix
          return <article key={id} className='person'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <h3>{age}</h3>
          </article>
        })
      }
   

    </section>
  );
};

export default List;
