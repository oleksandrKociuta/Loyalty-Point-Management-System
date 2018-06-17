package react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.facade.PayCardFacade;
import react.model.card.paycard.PayCard;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/payCard")
public class PayCardController {

  @Autowired
  private PayCardFacade facade;

  @RequestMapping(value = "/delete", method = RequestMethod.POST)
  public void deletePayCard(long id) {
    facade.deletePayCard(id);
  }

  @RequestMapping(value = "/all", method = RequestMethod.GET)
  public List<PayCard> getAllPayCardsById() {
    return facade.getAllPayCardsById();
  }

  @RequestMapping(value = "/add", method = RequestMethod.POST)
  public PayCard savePayCard(@RequestBody Map<String, String> attrs) {
    return facade.addCard(attrs);
  }

}
