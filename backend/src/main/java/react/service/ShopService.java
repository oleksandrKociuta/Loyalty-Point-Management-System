package react.service;

import react.model.shop.Shop;

import java.util.List;

public interface ShopService {

  Shop getByShopId(long shopId);

  Shop saveShop(Shop shop);

  List<Shop> getAllShops();

  void deleteShop(long id);
}
