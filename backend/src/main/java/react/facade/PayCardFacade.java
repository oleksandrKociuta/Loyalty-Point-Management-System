package react.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import react.model.card.paycard.PayCard;
import react.model.user.User;
import react.service.PayCardDAO;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Component
public class PayCardFacade {

  @Autowired
  private PayCardDAO cardDao;

  public PayCard addCard(Map<String, String> attrs) {
    PayCard payCard = new PayCard();
    payCard.setBalance(BigDecimal.valueOf(Double.parseDouble(attrs.get("balance"))));
    User user = getUserFromSession();
    payCard.setUser(user);
    return cardDao.savePayCard(payCard);

  }

  public void deletePayCard(long id) {
    cardDao.deletePayCard(id);
  }

  public List<PayCard> getAllPayCardsById() {
    return cardDao.getAllPayCardsById(getUserFromSession().getId());
  }

  private User getUserFromSession () {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    return (User) authentication.getPrincipal();
  }
}
