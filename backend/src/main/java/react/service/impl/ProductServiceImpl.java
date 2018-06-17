package react.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import react.model.product.Product;
import react.repository.ProductRepository;
import react.service.ProductService;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  private ProductRepository productRepository;

  @Override
  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  @Override
  public List<Product> getProductsByShopId(Long shopId) {
    return productRepository.findAllByShopId(shopId);
  }

  @Override
  public void deleteProduct(Long productId) {
    productRepository.delete(productId);
  }

  @Override
  public Product createProduct(Product product) {
    return productRepository.save(product);
  }

  @Override
  public Product editProduct(Product product) {
    return productRepository.save(product);
  }
}
