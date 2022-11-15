import React from "react";
import Home from "./Home";
import ReactDOM  from 'react-dom/client';
import ShowRecipe from "./ShowRecipe";
import Recipe from "./Recipe";

export default class RecipeList extends React.Component{
    constructor(props){
        super(props);
        this.openRecipe = this.openRecipe.bind(this);
        this.recipes=[
            new Recipe("image", "Blomkålsuppe", "Jeg lagde denne",["Vask blomkålen"],["Blomkål"]),
        new Recipe("image", "Løksuppe", "Jeg lagde denne",["Kutt løk i ringer"],["Løk"])
        ]
        }

    ReturnHome(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <Home/>
        </React.StrictMode>
        );  
    }
    
    addRecipe(recipe){
        this.recipes.push(recipe);
    }
    removeRecipe(recipe){
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
    openRecipe(item){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <ShowRecipe recipe={item}/>
        </React.StrictMode>
        );
    }

    render(){
        return(            
            <div>
                <ul>
                    {this.recipes.map(item=>(
                        <li>
                            <p>{item.title}</p>
                            <button onClick={()=>{this.openRecipe(item)}}>Se Oppskriften</button>
                        </li>
                )
            )}
                </ul>
            <button onClick={this.ReturnHome}>Return home</button>
            </div>
        );
    
    };   
}