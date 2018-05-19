package react.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.model.user.User;

@Repository
public interface UserRepository { //extends CrudRepository<User, Long> {
}
