import React from "react";
import StepList from "./StepList";

export default class RecipeForm extends React.Component{
     
    constructor(props){
        super(props); 
        this.state = {
            stepNr:1, 
            ingredientNr:1, 
            title:"", 
            steps:[], 
            ingredients:[], 
            image:"", 
            introduction:""};
        this.addSteps = this.addSteps.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    };

    saveRecipe(){
        console.log(this.state.image, this.state.title, this.state.introduction, this.state.steps, this.state.ingredients);

    }


    addSteps(){
        console.log(this.state.stepNr);
        const a = "step"+this.state.stepNr;
        this.setState({stepNr: this.state.stepNr+1});
        
            {for(let i=0; i<this.stepNr; i++){
                return(
                <input 
                name={a}
                type="text" 
                value={this.state.a} 
                onChange={this.handleInputChange}
                />);
                }
            }};
    
    addIngredients(){
        const a = "ingredientNr"+this.state.ingredientNr;
        this.setState({ingredientNr: this.state.ingredientNr+1});
        return(
            <input 
                name={a}
                type="text" 
                value={this.state.a} 
                onChange={this.handleInputChange}
            />
        );
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
        console.log(name, value);
    };



    render() {
        return(
                <div>
                    <header></header>
                    <form >
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
                        <label >Stegvis oppskrift
                            <br/>
                            <React.StrictMode>
                                <StepList/>
                             </React.StrictMode>
                        </label>
                            <br/>
                        <label>Ingredienser
                            <br/>
                            <input
                            name="ingredients"
                            type="text"
                            value={this.state.ingredients}
                            onChange={this.handleInputChange}
                            >
                            </input>
                                    <button 
                                        name="ingredients"
                                        onClick={this.addIngredients}
                                        >
                                        Legg til flere ingredienser.
                                    </button>
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
