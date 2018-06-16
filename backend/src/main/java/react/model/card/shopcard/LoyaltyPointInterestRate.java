package react.model.card.shopcard;

import lombok.Getter;

@Getter
public enum LoyaltyPointInterestRate {

  FIVE_PERCENTS(0.05, 0), TEN_PERCENTS(0.1, 20000), FIFTEEN_PERCENTS(0.15, 50000);

  private double percent;
  private double totalPaymentSum;

  LoyaltyPointInterestRate(double percent, double totalPaymentSum) {
    this.percent = percent;
    this.totalPaymentSum = totalPaymentSum;
  }
}
