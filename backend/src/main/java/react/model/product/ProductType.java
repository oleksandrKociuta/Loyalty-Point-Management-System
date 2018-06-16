package react.model.product;

import lombok.Getter;

@Getter
public enum ProductType {

  TRAINERS("Кросівки"), SPORT_SUITE("Спортивний костюм"), CUP("Кепка"), SOCCER_BALL("Футбольний м'яч");

  private String type;

  ProductType(String type) {
    this.type = type;
  }
}
