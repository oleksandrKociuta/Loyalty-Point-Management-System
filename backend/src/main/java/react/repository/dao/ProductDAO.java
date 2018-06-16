package react.repository.dao;

import react.model.card.paycard.PayCard;
import react.model.product.Product;

import java.util.List;

public interface ProductDAO {

  Product createProduct(Product product);

  void deleteProduct(long productId);

  Product buyProduct(Product product, PayCard payCard);

  Product getProductById(long productId);

  List<Product> getProductByShopId(long shopId);

}
