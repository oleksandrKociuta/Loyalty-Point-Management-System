package react.model.card;

import lombok.Getter;

@Getter
public enum CardStatus {

  IN_PROGRES("In Progres"), EXPIRE("Expire");

  private String status;

  CardStatus(String status) {
    this.status = status;
  }
}
