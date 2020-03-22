import React,{useEffect,useState} from 'react'
import "../App.css"
import Axios from 'axios';
import Recipe from './Recipe';
import Button from '@material-ui/core/Button';



function Start() {

     const APP_ID = `${process.env.REACT_APP_ID}`
     const APP_KEY = `${process.env.REACT_APP_KEY}`
    
     const [recipes ,setRecipes] = useState([]);
    const [search , setSearch] = useState("");
    const [query , setQuery] = useState("chicken")


    
    useEffect(() => {
        Axios(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(Res => {
            console.log(Res)
            setRecipes(Res.data.hits)
        })
        .catch(error=> {
            console.log(error)
        })
        
    }, [query])
    
    const getSearch=(e)=>{
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="APP">
           <div className="heading">
            <form onSubmit={getSearch} className="search_from">
            <h1 className="recipeName">Seacrh Any Recipe </h1>

                <input className="search-bar" type="text" value={search} 
                onChange={e => setSearch(e.target.value)} />
                <Button className="btn" variant="contained" color="primary"type='submit'>Search</Button>
            </form>
            </div>
               <div className="recipes">
                {
                recipes.map(recipe=> (
                   <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
                   image={recipe.recipe.image}
                   ingredients ={recipe.recipe.ingredients}
                   />
                ))
            }
        </div>
        </div>
    )
}

export default Start
