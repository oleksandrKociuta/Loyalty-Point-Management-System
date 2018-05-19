package react.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class RegistrationForm {
  private String firstName;
  private String lastName;
  private String email;
  private String username;
  private String password1;
  private String password2;

  public RegistrationForm(String firstName, String lastName, String email, String username, String password1, String password2) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password1 = password1;
    this.password2 = password2;
  }
}
