package react.model.discont;

import lombok.Getter;

@Getter
public enum DiscontsTypes {

  NORMAL("Normal"), BIRTHDAY("Birthday");

  private String type;

  DiscontsTypes(String type){
    this.type = type;
  }
}
