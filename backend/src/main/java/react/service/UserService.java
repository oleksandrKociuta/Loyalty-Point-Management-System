package react.service;

import react.model.user.User;

public interface UserService {

  User createUser(User user);

  User getUserByUsername(String username, String password);

}
