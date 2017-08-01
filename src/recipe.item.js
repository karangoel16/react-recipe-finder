import React ,{Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFavourite,delFavourite} from "./action/index";
class RecipeItems extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group" style={{"height":"50px"}}>
                            {
                                this.props.items.map((item,index) => {
                                    return(
                                        <li key={index} className="list-group-item">
                                            <div className="row">
                                                    <div className="col-xs-1 col-md-1">
                                                        {
                                                        this.props.fav.find(c=>c===index)!==undefined?
                                                            <div><span className="glyphicon glyphicon-star" onClick={()=>this.props.delFavourite(index)}></span></div>
                                                            :
                                                            <div><span className="glyphicon glyphicon-star-empty" onClick={()=>this.props.setFavourite(index)}></span></div>
                                                        }
                                                    </div>
                                                    <div className="col-xs-3 col-md-3">
                                                            <a href={item.thumbnail}>
                                                            {item.title}
                                                            </a>
                                                    </div>
                                                    <div className="col-md-4 col-xs-4">{item.ingredients}</div>
                                                    <div className="col-xs-4 col-md-4">
                                                        <img src={item.thumbnail} alt={item.title} className="img-responsive" height="50px"/>
                                                    </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function toPropsfromState(state)
{
    return {
            items:state.items,
            fav:state.favourite
    };
}

function mapStatefromDispatch(dispatch)
{
    return bindActionCreators({
        setFavourite,delFavourite
    },dispatch)
}

export default connect(toPropsfromState,mapStatefromDispatch)(RecipeItems);
