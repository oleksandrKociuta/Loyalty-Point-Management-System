package react.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import react.model.shop.Shop;
import react.repository.ShopRepository;
import react.service.ShopService;

import java.util.List;

@Service
public class ShopServiceImpl implements ShopService {

  @Autowired
  private ShopRepository shopRepository;

  @Override
  public Shop getByShopId(long shopId) {
    return shopRepository.findOne(shopId);
  }

  @Override
  public Shop saveShop(Shop shop) {
    return shopRepository.save(shop);
  }

  @Override
  public List<Shop> getAllShops() {
    return (List<Shop>) shopRepository.findAll();
  }

  @Override
  public void deleteShop(long id) {
    shopRepository.delete(id);
  }
}
