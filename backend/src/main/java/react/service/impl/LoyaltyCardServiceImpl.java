package react.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import react.model.card.shopcard.LoyaltyCard;
import react.repository.LoyaltyCardRepository;
import react.service.LoyaltyCardService;

public class LoyaltyCardServiceImpl implements LoyaltyCardService {

  @Autowired
  private LoyaltyCardRepository repository;

  @Override
  public LoyaltyCard saveLoyaltyCard(LoyaltyCard loyaltyCard) {
    return repository.save(loyaltyCard);
  }
}
