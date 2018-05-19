package react.model.discont;

import lombok.Getter;

@Getter
public enum DiscontsStatus {

  IN_PROGRES("In Progres"), EXPIRE("Expire");

  private String status;

  DiscontsStatus(String status) {
    this.status = status;
  }
}
