package react.model.user;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.card.paycard.PayCard;
import react.model.card.shopcard.LoyaltyCard;
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
  private Collection<PayCard> payCards = new ArrayList<>();
  @OneToMany(mappedBy = "user")
  private Collection<LoyaltyCard> loyaltyCards = new ArrayList<>();
  @ManyToMany(mappedBy = "users")
  private Collection<Shop> shops = new ArrayList<>();
}
