package react.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import react.model.product.Product;
import react.model.shop.Shop;
import react.service.ProductService;
import react.service.ShopService;

import java.util.List;

@Component
public class ProductFacade {

  @Autowired
  private ProductService productService;

  @Autowired
  private ShopService shopService;

  public List<Product> getAllProducts() {
    return productService.getAllProducts();
  }

  public List<Product> getProductsByShopId(Long shopId) {
    return productService.getProductsByShopId(shopId);
  }

  public void deleteProduct(Long productId) {
    productService.deleteProduct(productId);
  }

  public void createProduct(Product product, long shopId) {
    Shop shop = shopService.getByShopId(shopId);
    if (shop != null) {
      product.setShop(shop);
      shop.getProducts().add(product);
      shopService.saveShop(shop);
    }
  }

  public Product editProduct(Product product) {
    return productService.editProduct(product);
  }
}
