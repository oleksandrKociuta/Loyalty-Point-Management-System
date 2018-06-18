module.exports =
{
  private: {
    title: "Private page",
    greeting: "Hello %(name)s! How are you today?"
  },
  login: {
    title: "Сторінка Входу",
    hint: "Default login and password are 'user' and 'password'",
    error: {
      private: "Please login to access this page",
      unauthorized: "Будь ласка, залогінтеся, щоб отримати доступ до ресурсу!",
      badLogin: "Неправильні логін та пароль! "
    }
  },
  registration: {
    title: "Реєстраційна Сторінка",
    error: {
      emptyMandatoryFields: "Будь ласка, заповніть усі поля!",
      passwordValidationError: "Паролі мусять бути ідентичні та їх довжина мусить становити 8 символів!",
      duplication: "Логін або пароль вже використовуються!"
    }
  }
}