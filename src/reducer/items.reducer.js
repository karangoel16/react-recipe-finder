import {SET_RECIPE} from "../action/index";
function items(state=[],action)
{
    switch(action.type)
    {
        case SET_RECIPE:
            let items= action.items;
            return items;
        default:return state;
    }
}
export default items;