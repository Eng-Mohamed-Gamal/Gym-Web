'use client'



import React, { useEffect, useState } from 'react'
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
    const bodypartFetch = async ()=>{
    // GET ALL BODY PARTS
   const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , options)
   setBodyPart(["all" , ...data])
   // GET ALL BODY PARTS
    }
    normalFetch();
    bodypartFetch();
 },[])
 console.log(bodypart)
// FETCH ALL EXCERCISES BY DEFAULT 
  return (
 <div className="all">
    <Search setMain={setMain}  ></Search>
    <BodyPart arr={bodypart}></BodyPart>
    <ShowExercises main={main} ></ShowExercises>
 </div>
  )
}