package react.service;

import react.model.user.User;

public interface UserDAO {

  User createUser(User user);

  User getUserByUsername(String username, String password);

}
