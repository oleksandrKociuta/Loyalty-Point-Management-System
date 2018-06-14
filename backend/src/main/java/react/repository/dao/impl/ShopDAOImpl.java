package react.repository.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import react.model.shop.Shop;
import react.repository.ShopRepository;
import react.repository.dao.ShopDAO;

import java.util.List;

@Service
public class ShopDAOImpl implements ShopDAO {

  @Autowired
  private ShopRepository shopRepository;

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
