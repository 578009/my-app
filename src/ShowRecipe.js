import Home from "./Home";
import RecipeForm from "./RF";
import React from "react";
import ReactDOM from 'react-dom/client';
import { recipes } from "./RecipeListData";

export default class ShowRecipe extends React.Component{
    constructor(recipe){
        super(recipe);
        this.recipe = recipe;
        this.state={
            title:recipe.title, 
            steps:recipe.steps, 
            ingredients:recipe.ingredients, 
            image:recipe.image, 
            introduction:recipe.introduction
        }
        this.ReturnHome = this.ReturnHome.bind(this);
        this.Edit = this.Edit.bind(this);
        this.Delete = this.Delete.bind(this);
    }

    ReturnHome(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <Home/>
        </React.StrictMode>
        );
        
    }

    Edit(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <RecipeForm/>
        </React.StrictMode>
        );
    }

    Delete(){
        recipes.splice(recipes.indexOf(this.recipe), 1);
    }

    render(){
        return(
        <div>
            <header>
                {this.state.title}
            </header>
            <img src={this.state.image}> </img>
            <p>{this.state.introduction}</p>
            <ul>
                { this.state.steps.array.forEach(e => {
                    <li>
                        e
                    </li>  
                })}
            </ul>
            <ul> 
                {this.state.ingredients.array.forEach(e => {
                    <li>
                        e
                    </li>
                })}
            </ul>
            <button onClick={this.ReturnHome}>Return to home</button>
            <button onClick={this.Edit}>Edit</button>
            <button onClick={this.Delete}>Delete</button>
        </div>
        )
    }
}
    