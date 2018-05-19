package react.model.discont;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.user.User;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Discount implements Serializable {
  @Id
  @GeneratedValue
  private long id;
  private DiscountsStatus status;
  private DiscountType type;
  private double discount;
  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

  public Discount(long id, DiscountsStatus status, DiscountType type, double discount, User user) {
    this.id = id;
    this.status = status;
    this.type = type;
    this.discount = discount;
    this.user = user;
  }
}
