package react.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import react.model.product.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

  List<Product> findAllByShopId(long shopId);
}
