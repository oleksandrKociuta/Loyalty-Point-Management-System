package react.repository.dao.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import react.model.user.User;
import react.repository.UserRepository;
import react.repository.dao.UserDAO;

@Service
public class UserDAOImpl implements UserDAO {
  private final Log log = LogFactory.getLog(getClass());

  @Autowired
  private UserRepository repository;

  @Override
  public User createUser(User user) {
    User saveUser = null;
    try {
      saveUser = repository.save(user);
    } catch (DataIntegrityViolationException e) {
      throw e;
    }
    return saveUser;
  }

  @Override
  public User getUserByUsername(String username, String password) {
    return repository.findUserByusernameAndPassword(username, password);
  }
}
