package react.model.user;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.discont.Discount;
import react.model.shop.Shop;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class User implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  private String firstName;
  private String lastName;
  private String email;
  private String username;
  private String password;
  private Role role;
  @OneToMany(mappedBy = "user")
  private Collection<Discount> discounts = new ArrayList<>();
  @ManyToMany(mappedBy = "users")
  private Collection<Shop> shops = new ArrayList<>();
}
