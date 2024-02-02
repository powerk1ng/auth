// signup
export const selectSignUpLoadingState = (state) => state?.singUp?.isLoading;

// singIn
export const selectSignInLoadingState = (state) => state?.signIn?.isLoading
export const selectCurrentUser = (state) => state?.signIn?.currentUser
