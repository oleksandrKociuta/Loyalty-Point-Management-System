package react.model.card.shopcard;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.card.CardStatus;
import react.model.user.User;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class LoyaltyCard implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  @Enumerated(value = EnumType.STRING)
  private CardStatus status;
  @Enumerated(value = EnumType.STRING)
  private LoyaltyPointInterestRate interestRate = LoyaltyPointInterestRate.FIVE_PERCENTS;
  private BigDecimal totalSum;
  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;
}
