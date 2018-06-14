package react.model.shop;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.product.Product;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Setter
@Getter
@NoArgsConstructor
@Entity
public class Shop implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  @Column(unique = true)
  private String name;
  @Enumerated(value = EnumType.STRING)
  private ShopType type;
  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "shop_id", referencedColumnName = "id")
  private List<Product> products = new ArrayList<>();
}
