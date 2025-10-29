import React from 'react'
import MemeCard from '../components/MemeCard'
import { useEffect, useState } from 'react'
import { getAllMemes } from '../api/memes'


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
    // All memes came to data variable
  }, [])

  return (
    <div className='row'>
      {data.map(el => <MemeCard key={el.id} title={el.name} img={el.url} />)}
      {/* using props we send title and img to MemeCard.jsx  */}
    </div>
  )
}

export default Home
