package react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.controller.facade.UserFacade;
import react.model.Credentials;
import react.model.user.User;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/session")
public class AuthenticationController {

  @Autowired
  private UserFacade userFacade;

  @RequestMapping(method = RequestMethod.POST)
  public User login(@RequestBody Credentials credentials, HttpSession httpSession) {
    User user = userFacade.login(credentials);
    if (user == null) {
      throw new AuthenticationCredentialsNotFoundException("User not found!");
    }
    user.setAuthenticated(true);
    user.setToken(httpSession.getId());
    httpSession.setAttribute("user", user);
    Authentication authentication = new UsernamePasswordAuthenticationToken(user, credentials);
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return user;
  }

  @RequestMapping(method = RequestMethod.GET)
  public User session(HttpSession session) {
    return (User) session.getAttribute("user");
  }

  @RequestMapping(method = RequestMethod.DELETE)
  public void logout(HttpSession session) {
    session.invalidate();
  }
}
