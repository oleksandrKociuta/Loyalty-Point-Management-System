package react.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import react.model.card.paycard.PayCard;
import react.repository.PayCardRepository;
import react.service.PayCardDAO;

import java.util.List;

@Service
public class PayCardDAOimpl implements PayCardDAO {

  @Autowired
  private PayCardRepository repository;

  @Override
  public PayCard savePayCard(PayCard payCard) {
    return repository.save(payCard);
  }

  @Override
  public List<PayCard> getAllPayCardsById(long userId) {
    return repository.findAllByUserId(userId);
  }

  @Override
  public void deletePayCard(long id) {
    repository.delete(id);
  }
}
