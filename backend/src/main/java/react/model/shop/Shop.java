package react.model.shop;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.product.Product;
import react.model.user.User;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;


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
  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "user_shop",
    joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "shop_id", referencedColumnName = "id"))
  private Collection<User> users = new ArrayList<>();

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "product_shop",
    joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "shop_id", referencedColumnName = "id"))
  private Collection<Product> products = new ArrayList<>();
}
