package react.model.product;

import lombok.Getter;

@Getter
public enum ProductType {

  FOOD("Food"), CLOTHES("Clothes");

  private String status;

  ProductType(String status) {
    this.status = status;
  }
}
