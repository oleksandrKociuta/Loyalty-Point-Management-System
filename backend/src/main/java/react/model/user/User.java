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
  @Column(unique = true)
  private String username;
  @Column(unique = true)
  private String phone;
  private String password;
  @Enumerated(value = EnumType.STRING)
  private Role role;
  @OneToMany(mappedBy = "user")
  private Collection<Discount> discounts = new ArrayList<>();
  @ManyToMany(mappedBy = "users")
  private Collection<Shop> shops = new ArrayList<>();

  public User(long id, String firstName, String lastName, String email, String username, String phone, String password,
              Role role, Collection<Discount> discounts, Collection<Shop> shops) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.phone = phone;
    this.password = password;
    this.role = role;
    this.discounts = discounts;
    this.shops = shops;
  }
}
