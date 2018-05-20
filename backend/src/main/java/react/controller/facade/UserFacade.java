package react.controller.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import react.model.RegistrationForm;
import react.model.user.Role;
import react.model.user.User;
import react.model.user.UserDTO;
import react.repository.UserRepository;
import react.utils.UserConverter;

@Component
public class UserFacade {

  @Autowired
  private UserRepository userRepository;

  public UserDTO createUser(RegistrationForm form) {
    User newUser = UserConverter.convertUserFromRegistationForm(form, Role.USER);
    userRepository.save(newUser);
    return UserConverter.convertDTOFromUser(newUser);
  }

}
