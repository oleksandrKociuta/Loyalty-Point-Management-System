package react.model.card.shopcard;

import lombok.Getter;

@Getter
public enum LoyaltyPointInterestRate {

  FIVE_PERCENTS(0.05), TEN_PECENTS(0.1), FIFTEEN_PERCENTS(0.15);

  private double percent;

  LoyaltyPointInterestRate(double percent) {
    this.percent = percent;
  }
}
