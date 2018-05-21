package react.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
  private long id;
  private String firstName;
  private String lastName;
  private String email;
  private String username;
  private Role role;
  private String token;
  private String phone;
  private boolean authenticated;

  public UserDTO(long id, String firstName, String lastName, String email, String username, Role role, String token, String phone, boolean authenticated) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.role = role;
    this.token = token;
    this.phone = phone;
    this.authenticated = authenticated;
  }
}
