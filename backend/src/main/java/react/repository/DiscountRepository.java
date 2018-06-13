package react.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.model.card.paycard.PayCard;

@Repository
public interface DiscountRepository extends CrudRepository<PayCard, Long> {
}
