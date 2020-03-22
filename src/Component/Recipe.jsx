import React from 'react'
import style from "../recipe.module.css";

function Recipe({title , calories , image ,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol className={style.li}>
                {ingredients.map((ingredient , index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories :{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe
