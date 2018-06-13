package react.model.card.paycard;

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
public class PayCard implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  @Enumerated(value = EnumType.STRING)
  private CardStatus status = CardStatus.IN_PROGRES;
  private BigDecimal balance;
  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;
}
