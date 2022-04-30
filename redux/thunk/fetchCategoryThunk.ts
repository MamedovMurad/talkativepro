import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
/* import agent from "../../../front/"; */
import { fetchCategories } from "../actions/category";

export const categoryThunk = () => (dispatch:ThunkDispatch<{}, {}, AnyAction>) => {
/*     agent.Category.mainList()
    .then( posts => 
        dispatch(fetchCategories(posts.data))
    )
    .catch( error => {
        console.log(error);
    }); */
};

