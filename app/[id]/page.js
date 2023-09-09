


import React from 'react'
import { fetchData , options } from '../FetchCostum'

export default async function page({params}) {
  let Exercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}` , options)
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
    <div className="flex">
      <div className="img"><img src="assets/icons/body-part.png" alt="" /></div>
      <h1>{Exercise.bodyPart}</h1>
    </div>
    <div className="flex">
      <div className="img"><img src="assets/icons/target.png" alt="" /></div>
      <h1>{Exercise.target}</h1>
    </div>
    <div className="flex">
      <div className="img"><img src="assets/icons/equipment.png" alt="" /></div>
      <h1>{Exercise.equipment}</h1>
    </div>
  </div>
 </div> } 
  </div>
</div>
  )
}
