package react.controller.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import react.model.Credentials;
import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.User;
import react.model.user.UserDTO;
import react.repository.dao.UserDAO;
import react.utils.UserConverter;

import javax.servlet.http.HttpSession;

@Component
public class UserFacade {

  @Autowired
  private UserDAO dao;

  public UserDTO createUser(RegistrationForm form) {
    User newUser = UserConverter.convertUserFromRegistationForm(form, Role.USER);
    return UserConverter.convertDTOFromUser(dao.createUser(newUser));
  }

  public UserDTO getUserForLogin(Credentials credentials, HttpSession session) {
    User user = dao.getUserByUsername(credentials.getUsername(), credentials.getPassword());
    return user != null ? UserConverter.convertDTOFromUser(user, session) : null;
  }

}
