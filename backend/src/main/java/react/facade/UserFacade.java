package react.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import react.model.Credentials;
import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.User;
import react.service.UserDAO;
import react.utils.UserConverter;

@Component
public class UserFacade {

  @Autowired
  private UserDAO dao;

  public User createUser(RegistrationForm form) {
    User newUser = UserConverter.convertUserFromRegistationForm(form, Role.USER);;
    return dao.createUser(newUser);
  }

  public User login(Credentials credentials) {
    return dao.getUserByUsername(credentials.getUsername(), credentials.getPassword());
  }

}
