package react.service;

import react.model.card.paycard.PayCard;

import java.util.List;

public interface PayCardDAO {

  PayCard savePayCard(PayCard payCard);

  List<PayCard> getAllPayCardsById(long userId);

  void deletePayCard(long id);
}
