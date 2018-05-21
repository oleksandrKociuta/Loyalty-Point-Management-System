package react.utils;

import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.User;
import react.model.user.UserDTO;

import javax.servlet.http.HttpSession;

public class UserConverter {

  private UserConverter() {
    throw new IllegalStateException("Can't create instance.");
  }

  public static User convertUserFromRegistationForm(RegistrationForm form, Role role) {
    User user = new User();
    user.setFirstName(form.getFirstName());
    user.setLastName(form.getLastName());
    user.setEmail(form.getEmail());
    user.setUsername(form.getUsername());
    user.setPassword(form.getPassword1());
    user.setPhone(form.getPhone());
    user.setRole(role);
    return user;
  }

  public static UserDTO convertDTOFromUser(User user, HttpSession session) {
    UserDTO dto = new UserDTO();
    dto.setId(user.getId());
    dto.setFirstName(user.getFirstName());
    dto.setLastName(user.getLastName());
    dto.setEmail(user.getEmail());
    dto.setRole(user.getRole());
    dto.setUsername(user.getUsername());
    dto.setToken(session.getId());
    dto.setPhone(user.getPhone());
    dto.setAuthenticated(true);
    return dto;
  }

  public static UserDTO convertDTOFromUser(User user) {
    UserDTO dto = new UserDTO();
    dto.setId(user.getId());
    dto.setFirstName(user.getFirstName());
    dto.setLastName(user.getLastName());
    dto.setEmail(user.getEmail());
    dto.setRole(user.getRole());
    dto.setPhone(user.getPhone());
    dto.setUsername(user.getUsername());
    return dto;
  }
}
