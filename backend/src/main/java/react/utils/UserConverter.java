package react.utils;

import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.User;
import react.model.user.UserDTO;

public class UserConverter {

  private UserConverter(){
    throw new IllegalStateException("Can't create instance.");
  }

  public static User convertUserFromRegistationForm(RegistrationForm form, Role role){
    User user = new User();
    user.setFirstName(form.getFirstName());
    user.setLastName(form.getLastName());
    user.setEmail(form.getEmail());
    user.setUsername(form.getUsername());
    user.setPassword(form.getPassword1());
    user.setRole(role);
    return user;
  }

  public static UserDTO convertDTOFromUser(User user){
    UserDTO dto = new UserDTO();
    dto.setFirstName(user.getFirstName());
    dto.setLastName(user.getLastName());
    dto.setEmail(user.getEmail());
    dto.setRole(user.getRole());
    dto.setUsername(user.getUsername());
    return dto;

  }
}
