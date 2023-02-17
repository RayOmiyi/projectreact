import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [info,setInfo] = useState(data)

  const clearall=()=>{
    setInfo([])
  }
   const remove=(id)=>{
    let newPerson = info.filter((infinix)=> infinix.id !==id)
    setInfo(newPerson)
  }

  return <main>
    <section className='container'>
      <h3>{info.length} birthday</h3>
      {/* <List info={info}/> */}
       {
        info.map((infinix)=>{
          const {id,name,age,image} = infinix
          return <article key={id} className='person'>
            <h3>{name}</h3>
              <button onClick={()=>remove(id)}>remove</button>
            <img src={image} alt={name} />
            <p>{age}</p> 
          </article>
        })
      }
     
      <button className='btn' onClick={clearall}>Clear All</button>
    </section>

  </main>

}


export default App;
