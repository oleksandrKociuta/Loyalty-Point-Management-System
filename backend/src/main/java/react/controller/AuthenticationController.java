package react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.controller.facade.UserFacade;
import react.model.Credentials;
import react.model.user.UserDTO;

import javax.servlet.http.HttpSession;

@RestController()
@RequestMapping("/session")
public class AuthenticationController {
  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UserFacade userFacade;

  @RequestMapping(method = RequestMethod.POST)
  public UserDTO login(@RequestBody Credentials credentials, HttpSession httpSession) {
    Authentication authentication = new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authenticationManager.authenticate(authentication));

    UserDTO user = null;//new UserDTO(credentials.getUsername(), httpSession.getId(), true);
    httpSession.setAttribute("user", user);
    return user;
  }

  @RequestMapping(method = RequestMethod.GET)
  public UserDTO session(HttpSession session) {
    return (UserDTO) session.getAttribute("user");
  }

  @RequestMapping(method = RequestMethod.DELETE)
  public void logout(HttpSession session) {
    session.invalidate();
  }
}
