package react.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.model.discont.Discount;

@Repository
public interface DiscountRepository extends CrudRepository<Discount, Long> {
}
