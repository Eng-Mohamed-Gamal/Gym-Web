'use client'



import React, { Suspense, useEffect, useState } from 'react'
import Search from './Search'
import BodyPart from './BodyPart'
import ShowExercises from './ShowExercises'
import { fetchData , options } from "../FetchCostum";


export default  function  All() {
const [main , setMain] = useState()
const [bodypart , setBodyPart ] = useState()


// FETCH ALL EXCERCISES BY DEFAULT 
 useEffect(()=>{
    const normalFetch = async ()=>{
    const EXCERCISES = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , options)
    setMain(EXCERCISES)
    }
// FETCH ALL EXCERCISES BY DEFAULT 

// GET ALL BODY PARTS
    const bodypartFetch = async ()=>{
    const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , options)
    setBodyPart(["all" , ...data])
    }
    // GET ALL BODY PARTS
    normalFetch();
    bodypartFetch();
 },[])


  return (
 <div className="all">

   <Search setMain={setMain} main={main}  ></Search>
    <BodyPart arr={bodypart} setMain={setMain}  ></BodyPart>
    <ShowExercises main={main} ></ShowExercises>

 </div>
  )
}
