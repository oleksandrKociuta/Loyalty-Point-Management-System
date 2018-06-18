package react.model.shop;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import react.model.product.Product;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Data
@ToString(exclude = {"products"})
@EqualsAndHashCode(exclude = {"products"})
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Shop implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  @Column(unique = true)
  private String name;
  @Enumerated(value = EnumType.STRING)
  private ShopType type;
  @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JsonManagedReference
  private Set<Product> products = new HashSet<>();
}
