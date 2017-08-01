import {FAV_RECIPE,DEL_FAV_RECIPE} from "../action/index";


function favourite(state=[],action)
{
    switch(action.type)
    {
        case FAV_RECIPE:
            let fav=state;
            fav=[...state,action.id];//this is to add state in the list
            return fav;
        case DEL_FAV_RECIPE:
            let val=new Set(state);
            val.delete(action.id);
            return Array.from(val);//need to implement this
        default:return state;
    }
}
export default favourite;