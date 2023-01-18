import { useState } from 'react';
import AddCategory from './componentes/AddCategory';
import './App.css';
import GifGrid from './componentes/GifGrid';


function App() {


const [categories, setCategories] = useState(['One Punch Man']);

const onAddCategory = (newCategory) => {

if (categories.includes(newCategory)) {
  return;
}

setCategories([ newCategory, ...categories]);
}

  return (
    
    <div className="App">
      <AddCategory
      //setCategories= {setCategories}
      onNewCategory= {event => onAddCategory(event) }
      />
      <h1>Gif Expert App</h1>

    

<button onClick={onAddCategory}>Agregar</button>


{
categories.map(  (category) => (<GifGrid key={category} category={category} />)  )

}

      {/* <ol>
      {categories.map( category =>{
return <li key={category} >{ category}</li>

      }
        
        )}


      </ol> */}
    </div>
  );
}

export default App;
