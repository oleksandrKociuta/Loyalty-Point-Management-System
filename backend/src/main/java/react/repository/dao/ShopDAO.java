package react.repository.dao;

import react.model.shop.Shop;

import java.util.List;

public interface ShopDAO {

  Shop saveShop(Shop shop);

  List<Shop> getAllShops();

  void deleteShop(long id);
}
