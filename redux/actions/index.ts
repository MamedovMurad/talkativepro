import * as TodoActions from './todoAction'
import * as ProductActions from '../thunk/fetchProductThunk'
import * as CategoryThunk  from '../thunk/fetchCategoryThunk'

export const Actions= {
    ...TodoActions,
    ...ProductActions,
    ...CategoryThunk

}