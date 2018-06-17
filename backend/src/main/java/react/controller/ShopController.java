package react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.model.shop.Shop;
import react.model.shop.ShopType;
import react.service.ShopService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/shop")
public class ShopController {

  @Autowired
  private ShopService dao;

  @RequestMapping(method = RequestMethod.PUT)
  public Shop createShop(@RequestBody Map<String, String> attrs) {
    Shop shop = new Shop();
    shop.setName(attrs.get("name"));
    shop.setType(ShopType.valueOf(attrs.get("type")));
    return dao.saveShop(shop);
  }

  @RequestMapping(method = RequestMethod.GET)
  public List<Shop> getAllShops() {
    return dao.getAllShops();
  }
}
