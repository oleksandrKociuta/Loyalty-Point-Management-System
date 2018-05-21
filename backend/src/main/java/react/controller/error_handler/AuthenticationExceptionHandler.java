package react.controller.error_handler;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import react.message.ErrorMessage;

@ControllerAdvice
public class AuthenticationExceptionHandler {
  private final Log log = LogFactory.getLog(getClass());

  @ExceptionHandler(AuthenticationException.class)
  @ResponseBody
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  public ErrorMessage handleAuthenticationException(AuthenticationException e) {
    log.debug("Incorrect login");
    return new ErrorMessage(e.getMessage(), "login.error.badLogin");
  }

  @ExceptionHandler(DataIntegrityViolationException.class)
  @ResponseBody
  @ResponseStatus(HttpStatus.CONFLICT)
  public ErrorMessage handleDataIntegrityViolationException(DataIntegrityViolationException e) {
    log.debug("Duplicating login or phone");
    return new ErrorMessage(e.getMessage(), "registration.error.duplication");
  }

}
