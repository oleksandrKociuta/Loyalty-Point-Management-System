package react.model.user;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import react.model.discont.Discount;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

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
  private Collection<Discount> disconts = new ArrayList<>();
}
