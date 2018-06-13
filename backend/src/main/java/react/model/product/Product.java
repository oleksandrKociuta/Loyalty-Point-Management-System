package react.model.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.shop.Shop;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Product {
  @Id
  @GeneratedValue
  private long id;
  private double price;
  @ManyToMany(mappedBy = "products")
  private Collection<Shop> shops = new ArrayList<>();
}
