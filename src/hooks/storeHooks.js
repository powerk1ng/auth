import { useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useAppDispatch = () => useDispatch();

export const useShallowEqualSelector = (selector) => {
    return useSelector(selector, shallowEqual);
};

export const useActions = (actions, deps) => {
    const dispatch = useAppDispatch();
    return useMemo(
        () => {
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : [dispatch]
    );
};

