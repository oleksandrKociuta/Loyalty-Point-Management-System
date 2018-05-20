package react.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
  private String firstName;
  private String lastName;
  private String email;
  private String username;
  private Role role;
  private String token;
  private boolean authenticated;

  public UserDTO(String firstName, String lastName, String email, String username, String token, boolean authenticated) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.token = token;
    this.authenticated = authenticated;
  }
}
