export const configs = {
  endpoint: {
    auth: {
      signIn: "api/auth/signin",
      logOut: "api/auth/logout",
      signUp: "api/auth/signup",
    }
  },

  routes: {
    home: "/",
    login: "/login",
    signUp: "/signup",
    setPassword: "/set-password",
    forgotPassword: "/forgot-password",
    private: "/private",
  },
  baseUrl: 'http://localhost:3000'
};