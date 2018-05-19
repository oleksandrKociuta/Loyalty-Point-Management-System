package react.model.shop;

import lombok.Getter;

@Getter
public enum ShopType {

  SPORT("Sport"), ONLINE("Online"), BRAND("Boutique");

  private String type;

  ShopType(String type) {
    this.type = type;
  }
}
