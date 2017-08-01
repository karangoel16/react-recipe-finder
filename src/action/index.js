export const SET_RECIPE='SET_RECIPE';

export function setRecipe(items)
{
    return {
        type:SET_RECIPE,
        items:items
    }
}

export const FAV_RECIPE = 'FAV_RECIPE';

export function setFavourite(id){
    return {
        type:FAV_RECIPE,
        id:id
    };
}

export const DEL_FAV_RECIPE = 'DEL_FAV_RECIPE';

export function delFavourite(id){
    return {
        type:DEL_FAV_RECIPE,
        id:id
    }
}