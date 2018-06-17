package react.service;

import react.model.product.Product;

import java.util.List;

public interface ProductService {

  public List<Product> getAllProducts();

  public List<Product> getProductsByShopId(Long shopId);

  public void deleteProduct(Long productId);

  public Product createProduct(Product product);

  public Product editProduct(Product product);

}
