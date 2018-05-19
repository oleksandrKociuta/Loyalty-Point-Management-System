package react.model.discont;

import lombok.Getter;

@Getter
public enum DiscountsStatus {

  IN_PROGRES("In Progres"), EXPIRE("Expire");

  private String status;

  DiscountsStatus(String status) {
    this.status = status;
  }
}
