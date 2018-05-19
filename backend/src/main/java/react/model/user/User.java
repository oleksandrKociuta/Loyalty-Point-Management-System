package react.model.user;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class User implements Serializable {
  private String firstName;
  private String lastName;
  private String email;
  private String username;
  private String password;
  private Role role;
  private String token;
  private boolean authenticated;

  public User(String firstName, String lastName, String email, String username, String password, String token, boolean authenticated) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.token = token;
    this.authenticated = authenticated;
  }
}
