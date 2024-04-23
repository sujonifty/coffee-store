
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees);
  return (
    <>
      <h1>The number of coffees: {coffees.length}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
