import { useState } from 'react'
import Counter from '../components/Counter'

export default function Inventory() {
    const [counters, setCounters] = useState([
        {
          title: 'Honda Counter',
          initialCount: 0
        },
        {
          title: 'Toyota Counter',
          initialCount: 5
        },
        {
          title: 'BMW Counter',
          initialCount: 1
        },
        {
          title: 'Insurance Package',
          iniitalCount:315
        }
      ])
    
    
    
    
    
      return (
        <div className="App">
         {
          counters.map((counter) => <Counter title ={counter.title} initialCount={counter.initialCount}/>)
          }
        </div>
      );
}