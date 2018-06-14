package react.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import react.model.card.paycard.PayCard;

import java.util.List;

@Repository
public interface PayCardRepository extends JpaRepository<PayCard, Long> {

  List<PayCard> findAllByUserId(Long userId);
}
