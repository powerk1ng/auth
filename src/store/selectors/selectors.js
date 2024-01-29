export const selectSignUpLoadingState = (state) => state?.singUpReducer?.isLoading;
export const selectSignUpSuccess = (state) => state?.singUpReducer?.success
export const selectSingUpError = (state) => state?.singUpReducer?.error;
