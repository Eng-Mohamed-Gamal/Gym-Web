


import { fetchData , options } from "./FetchCostum"
import All from "./Components/All";



export const metadata = {
  title: 'Glods Gym',
  description: 'Generated by create next app',
}





export default  function Home() {
  return (
    <div className="home">
      <div className="stage-1">
        <div className="con">
        <h1>fitness club</h1>
          <h1>sweat , smile and reapet</h1>
          <h3>check out the most effective exersicses personalized to you </h3>
          <a href="#Exercises">explore exercises</a>
        </div>
        </div>
        <All ></All>
    </div>
  )
}
