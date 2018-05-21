module.exports =
{
  private: {
    title: "Private page",
    greeting: "Hello %(name)s! How are you today?"
  },
  login: {
    title: "Login Page",
    hint: "Default login and password are 'user' and 'password'",
    error: {
      private: "Please login to access this page",
      unauthorized: "Please login to access this resource",
      badLogin: "Incorrect user and password"
    }
  },
  registration: {
    title: "Registration Page",
    error: {
      emptyMandatoryFields: "Please input ALL fields!",
      passwordValidationError: "Passwords must be identical, and the length of the password must be greater than eight characters long!",
      duplication: "Login or Phone are already used!"
    }
  }
}