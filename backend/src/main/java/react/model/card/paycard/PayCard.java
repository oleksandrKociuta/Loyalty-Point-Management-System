package react.model.card.paycard;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import react.model.card.CardStatus;
import react.model.user.User;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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
