import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class FavListComponent extends Component{
    render(){
        return (
            <div>
                <div>
                    <h4 className="link"><Link to="/">Home</Link></h4>
                    <h4>Favourite Recipe</h4>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group" style={{"height":"50px"}}>
                            {
                                this.props.val.map((item,index) => {
                                    return(
                                        <li key={index} className="list-group-item">
                                            <div className="row">
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
        );
    }

}

function mapStateToProps(state)
{
    let val=[];
    for(var i=0;i<state.favourite.length;i++)
    {
        val.push(state.items[state.favourite[i]]);
    }
    return {
        val
    }
}

export default connect(mapStateToProps,null)(FavListComponent);