package react.model.card.shopcard;

import lombok.Data;
import lombok.NoArgsConstructor;
import react.model.card.CardStatus;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Entity
@NoArgsConstructor
public class LoyaltyCard implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  @Enumerated(value = EnumType.STRING)
  private CardStatus status = CardStatus.IN_PROGRES;
  @Enumerated(value = EnumType.STRING)
  private LoyaltyPointInterestRate interestRate = LoyaltyPointInterestRate.FIVE_PERCENTS;
  private BigDecimal totalSum = new BigDecimal(0);
}
