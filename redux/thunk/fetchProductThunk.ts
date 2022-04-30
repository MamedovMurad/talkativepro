import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
/* import agent from "../../api/agent";
import { fetchProdutcs } from "../actions/product"; */

export const productThunk = () => (dispatch:ThunkDispatch<{}, {}, AnyAction>) => {
/*     agent.Products.list()
    .then( posts => 
        dispatch(fetchProdutcs(posts.data))
    )
    .catch( error => {
        console.log(error);
    }); */
};

