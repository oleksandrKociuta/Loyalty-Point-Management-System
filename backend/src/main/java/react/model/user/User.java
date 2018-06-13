package react.model.user;

import lombok.*;
import react.model.card.paycard.PayCard;
import react.model.card.shopcard.LoyaltyCard;
import react.model.shop.Shop;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@Data
@Entity
@NoArgsConstructor
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
  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "loyalty_card_id")
  private LoyaltyCard loyaltyCard =  new LoyaltyCard() ;
}
