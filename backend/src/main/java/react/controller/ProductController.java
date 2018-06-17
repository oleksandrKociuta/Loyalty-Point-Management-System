package react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import react.facade.ProductFacade;
import react.model.product.Product;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  private ProductFacade productFacade;

  @RequestMapping(value = "/all", method = RequestMethod.GET)
  public List<Product> getAllProducts() {
    return productFacade.getAllProducts();
  }

  @RequestMapping(value = "{shopId}", method = RequestMethod.GET)
  public List<Product> getProductsByShopId(@PathVariable Long shopId) {
    return productFacade.getProductsByShopId(shopId);
  }

  @RequestMapping(value = "{productId}", method = RequestMethod.DELETE)
  public void deleteProduct(@PathVariable Long productId) {
    productFacade.deleteProduct(productId);
  }

  @RequestMapping(value = "{shopId}", method = RequestMethod.PUT)
  public void createProduct(@RequestBody Product product, @PathVariable long shopId) {
    productFacade.createProduct(product, shopId);
  }

  @RequestMapping(method = RequestMethod.POST)
  public Product editProduct(@RequestBody Product product) {
    return productFacade.editProduct(product);
  }
}
