import React from "react";
import Recipe from "./Recipe";
import recipes from "./RecipeListData";

export default class RecipeForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            title:"", 
            steps:"", 
            ingredients:"", 
            image:"", 
            introduction:""
            };
        this.list = recipes;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    };

    saveRecipe(){
        let image = this.state.image;
        let title =  this.state.title;
        let introduction = this.state.introduction;
        let steps =  this.state.steps.split(/\r?\n/);
        let ingredients = this.state.ingredients.split(/\r?\n/);

        let a = new Recipe(image, title, introduction, steps, ingredients);       
        {{this.list.set(a)}}; 
        console.log(this.list);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
    };

    render() { 
        return(
                <div>
                    <header></header>
                    <form onSubmit={this.saveRecipe}>
                        <label>Tittel
                            <br/>
                                <input 
                                    name="title" 
                                    type="text" 
                                    value={this.state.title} 
                                    onChange={this.handleInputChange}
                                    />
                        </label>
                            <br/>
                        <label>Bilde
                            <br/>
                                <input 
                                    name="image"
                                    value={this.state.image}
                                    onChange={this.handleInputChange}
                                    />
                        </label>
                            <br/>
                        <label>Introduksjon
                            <br/>
                                <input 
                                    name="introduction"
                                    type="text"
                                    value={this.state.introduction}
                                    onChange={this.handleInputChange}
                                />
                        </label>
                            <br/>
                        <label >Stegvis oppskrift (Seperer med enter)
                            <br/>
                            <textarea
                                name="steps"
                                type="text"
                                value={this.state.steps}
                                onChange={this.handleInputChange}
                            />
                        </label>
                            <br/>
                        <label>Ingredienser (seperer med enter)
                            <br/>
                            <textarea
                            name="ingredients"
                            type="text"
                            value={this.state.ingredients}
                            onChange={this.handleInputChange}
                            />
                        </label>
                            <br/>
                        <button onClick={this.saveRecipe}>
                            Lagre oppskrift
                        </button>
                    </form>
                </div>
                )
    };

}
