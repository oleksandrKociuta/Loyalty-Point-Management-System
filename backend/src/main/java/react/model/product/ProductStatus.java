package react.model.product;

import lombok.Getter;

@Getter
public enum ProductStatus {
  NEW("Новий"), SOLD_OUT("Продано");

  private String status;

  ProductStatus(String status) {
    this.status = status;
  }
}
