import React from "react";
import RecipeForm from "./RF"
import ReactDOM from 'react-dom/client';
import RecipeList from "./RecipeList";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.toRecipeForm = this.toRecipeForm.bind(this);
        this.toRecipeList = this.toRecipeList.bind(this);
        
    };

    toRecipeForm(event){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        
        root.render(
        <React.StrictMode>
            <RecipeForm/>
        </React.StrictMode>
        );
    };

    toRecipeList(event){
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        
        root.render(
        <React.StrictMode>
            <RecipeList/>
        </React.StrictMode>
        );
    }
    
    render(){
        return(
            <div>
                <button onClick={this.toRecipeForm}>Lag ny oppskrift</button>
                <button onClick={this.toRecipeList}>Se oppskrifter</button>   
            </div>
        );
    };
    
};