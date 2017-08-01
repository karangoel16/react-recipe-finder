import React , {Component} from 'react';
import {Form,FormGroup , FormControl , ControlLabel, Button } from 'react-bootstrap';
import {setRecipe} from "./action/index";
import {connect} from 'react-redux';
class RecipeForm extends Component{
    //this is local state
    constructor(){
        super();
        this.state={
            ingredients:'',
            dish:''
        }
    }
    search(){
        const url="http://www.recipepuppy.com/api/?i="+this.state.ingredients+"&q="+this.state.dish;
        fetch(url,{
            method:'GET',
        }).then(response => response.json())
            .then(json=>this.props.setRecipe(json.results));
    }
    render(){
        return (
            <div>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Ingredients</ControlLabel>{' '}
                        <FormControl type="text" placeholder="chicken,garlic"
                        onChange={event => this.setState({ingredients:event.target.value})}/>
                                         </FormGroup>{' '}
                    <FormGroup>
                        <ControlLabel>Dish</ControlLabel>{' '}
                        <FormControl type="text" placeholder="Curry"
                        onChange={event => this.setState({dish:event.target.value})}/>
                    </FormGroup>
                    {' '}
                    <Button onClick={()=>this.search()}>Submit</Button>
                </Form>
            </div>
        )
    }
}


export default connect(null,{setRecipe})(RecipeForm);