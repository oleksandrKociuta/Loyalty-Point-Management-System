package react.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.model.shop.Shop;

@Repository
public interface ShopRepository extends CrudRepository<Shop, Long> {
}
