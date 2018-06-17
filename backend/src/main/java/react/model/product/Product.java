package react.model.product;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import react.model.shop.Shop;
import react.model.user.User;

import javax.persistence.*;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Product {
  @Id
  @GeneratedValue
  private long id;
  private double price;
  private String name;
  @Enumerated(value = EnumType.STRING)
  private ProductStatus status = ProductStatus.NEW;
  @Enumerated(value = EnumType.STRING)
  private ProductType type;
  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private User user;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "shop_id", nullable = false)
  @JsonBackReference
  private Shop shop;
}
