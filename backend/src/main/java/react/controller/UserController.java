package react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.facade.UserFacade;
import react.model.RegistrationForm;
import react.model.user.User;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserFacade facade;

  @RequestMapping(value = "/createUser", method = RequestMethod.POST)
  public User createUser(@RequestBody RegistrationForm registrationForm) {
    return facade.createUser(registrationForm);
  }
}
