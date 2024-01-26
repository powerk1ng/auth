import {
    shallowEqual,
    useDispatch,
    useSelector
} from "react-redux";

export const useAppDispatch = useDispatch();

export const useShallowEqualSelector = (selector) =>
    useSelector(selector, shallowEqual);

export const useActions = (actions, deps) => {
    const dispatch = useAppDispatch();
    return useMemo(
        () => {
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : [dispatch]
    );
};