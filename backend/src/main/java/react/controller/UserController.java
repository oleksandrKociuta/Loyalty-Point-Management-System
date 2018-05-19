package react.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.UserDTO;
import react.utils.UserConverter;

@RestController
@RequestMapping("/user")
public class UserController {

  @RequestMapping(value = "/createUser", method = RequestMethod.POST)
  public UserDTO createUser(@RequestBody RegistrationForm registrationForm) {
    return UserConverter.convertFromRegistationForm(registrationForm, Role.USER);
  }
}
