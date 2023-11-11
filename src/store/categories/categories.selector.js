import {createSelector} from 'reselect';

const selectCategoryReducer=(state)=>{
    console.log("selctor1 fired")
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>{
        console.log("selector2 fired")
        return categoriesSlice.categories;
    }
)

export const selectCategoriesMap = createSelector( [selectCategories],(categories)=>{
    console.log("selector3 fired")
return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
});