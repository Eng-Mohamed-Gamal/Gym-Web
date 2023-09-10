


import React from 'react'
import { fetchData , options , youtube } from '../FetchCostum'
import Link from 'next/link'
export default async function page({params}) {
  let Exercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}` , options)
  let ExerciseVideos = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${Exercise.name}` , youtube)
  let fetchByTargetMuscle = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${Exercise.target}` , options)
  let fetchByEquipment = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${Exercise.equipment}` , options)

  return (
<div className="single">
  <div className="container">
  {Exercise &&  <div className="all">
  <div className="img">
    <img src={Exercise.gifUrl} alt="" />
  </div>
  <div className="con">
    <h1>{Exercise.name}</h1>
    <p>Exercises keep you strong . {Exercise.name} is one of the best </p>
    <p>Exercises to target your {Exercise.target} . it will help ypu improve your mood and gain energy </p>
    <h1 className="cen">bodyPart</h1>
    <div className="flex">
      <div className="img2"><img src="assets/icons/body-part.png" alt="" /></div>
      <h2>{Exercise.bodyPart}</h2>
    </div>
    <h1 className="cen">target</h1>
    <div className="flex">
      <div className="img2"><img src="assets/icons/target.png" alt="" /></div>
      <h2>{Exercise.target}</h2>
    </div>
    <h1 className="cen">depend on</h1>
    <div className="flex">
      <div className="img2"><img src="assets/icons/equipment.png" alt="" /></div>
      <h2>{Exercise.equipment}</h2>
    </div>
  </div>
 </div> } 
    <h1 className='cen'>watch {Exercise.name} videos</h1>
   {ExerciseVideos && <div className="videos">
    {ExerciseVideos.contents.slice(0,6).map((item , index)=>{
      return (
        <a className="vid"  href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='blank' key={index}>
          <img src={item.video.thumbnails[0].url} alt="" />
          <h1>{item.video.title}</h1>
          <h3>{item.video.channelName}</h3>
        </a>
      )
    })}
    </div>}    
    <h1 className='cen'>similar target muscle exercises</h1>
   {fetchByTargetMuscle && <div className="similar">
   {fetchByTargetMuscle.slice(0,6).map((item , index)=>{
      return (
        <div className="sim"  key={index}>
          <img src={item.gifUrl} alt="" />
          <h1>{item.target}</h1>
          <h1>{item.bodyPart}</h1>
          <h1>{item.equipment}</h1>
          <Link href={`/${item.id}`}>explore</Link>
        </div>
      )
    })}
   </div> }  
   <h1 className='cen'>similar equipment exercises</h1>
     {fetchByEquipment && <div className="similar">
     {fetchByEquipment.slice(0,6).map((item , index)=>{
      return (
        <div className="sim"  key={index}>
          <img src={item.gifUrl} alt="" />
          <h1>{item.target}</h1>
          <h1>{item.bodyPart}</h1>
          <h1>{item.equipment}</h1>
          <Link href={`/${item.id}`}>explore</Link>
        </div>
      )
    })}
     </div> } 
   </div>
</div>
  )
}
