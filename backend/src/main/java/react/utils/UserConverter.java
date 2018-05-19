package react.utils;

import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.User;

public class UserConverter {

  private UserConverter(){
    throw new IllegalStateException("Can't create instance.");
  }

  public static User convertFromRegistationForm(RegistrationForm form, Role role){
    User newUser = new User();
    newUser.setFirstName(form.getFirstName());
    newUser.setLastName(form.getLastName());
    newUser.setEmail(form.getEmail());
    newUser.setUsername(form.getUsername());
    newUser.setPassword(form.getPassword1());
    newUser.setRole(role);
    return newUser;
  }
}
