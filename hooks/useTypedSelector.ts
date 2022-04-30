import {TypedUseSelectorHook, useSelector} from "react-redux";
import {IRootState} from "../redux/reducers";


export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector
