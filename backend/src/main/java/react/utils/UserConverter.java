package react.utils;

import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.UserDTO;

public class UserConverter {

  private UserConverter(){
    throw new IllegalStateException("Can't create instance.");
  }

  public static UserDTO convertFromRegistationForm(RegistrationForm form, Role role){
    UserDTO newUser = new UserDTO();
    newUser.setFirstName(form.getFirstName());
    newUser.setLastName(form.getLastName());
    newUser.setEmail(form.getEmail());
    newUser.setUsername(form.getUsername());
    newUser.setPassword(form.getPassword1());
    newUser.setRole(role);
    return newUser;
  }
}
