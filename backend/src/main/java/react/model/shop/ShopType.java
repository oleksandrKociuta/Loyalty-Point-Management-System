package react.model.shop;

import lombok.Getter;

@Getter
public enum ShopType {

  SPORT("Спортивний"), ONLINE("Онлайн");

  private String type;

  ShopType(String type) {
    this.type = type;
  }
}
