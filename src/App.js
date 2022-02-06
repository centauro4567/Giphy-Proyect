import {useState} from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {

  const [categories, setCategories] = useState([])



  return (
    <>
      <h1>Giphy Search</h1>
        <AddCategory setCategories={setCategories}/>
      <hr/>
      <ul>
        {categories.map(category=>{
          return <GifGrid 
            key={category} 
            category={category}/>
        })}
      </ul>

    </>
  );
}

export default App;
