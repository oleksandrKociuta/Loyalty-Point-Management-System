package react.model.discont;

import lombok.Getter;

@Getter
public enum DiscountType {

  NORMAL("Normal"), BIRTHDAY("Birthday");

  private String type;

  DiscountType(String type){
    this.type = type;
  }
}
