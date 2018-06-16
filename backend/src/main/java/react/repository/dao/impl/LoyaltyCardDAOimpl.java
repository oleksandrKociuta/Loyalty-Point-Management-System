package react.repository.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import react.model.card.shopcard.LoyaltyCard;
import react.repository.LoyaltyCardRepository;
import react.repository.dao.LoyaltyCardDao;

public class LoyaltyCardDAOimpl implements LoyaltyCardDao {

  @Autowired
  private LoyaltyCardRepository repository;

  @Override
  public LoyaltyCard saveLoyaltyCard(LoyaltyCard loyaltyCard) {
    return repository.save(loyaltyCard);
  }
}
