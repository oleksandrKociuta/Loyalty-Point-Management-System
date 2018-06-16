package react.repository.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import react.model.card.paycard.PayCard;
import react.model.card.shopcard.LoyaltyCard;
import react.model.card.shopcard.LoyaltyPointInterestRate;
import react.model.product.Product;
import react.model.product.ProductStatus;
import react.model.user.User;
import react.repository.ProductRepository;
import react.repository.dao.LoyaltyCardDao;
import react.repository.dao.PayCardDAO;
import react.repository.dao.ProductDAO;

import java.math.BigDecimal;
import java.util.List;

public class ProductDAOimpl implements ProductDAO {

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private LoyaltyCardDao loyaltyCardDao;

  @Autowired
  private PayCardDAO payCardDAO;

  @Override
  public Product createProduct(Product product) {
    return productRepository.save(product);
  }

  @Override
  public void deleteProduct(long productId) {
    productRepository.delete(productId);
  }

  @Override
  @Transactional
  public Product buyProduct(Product product, PayCard payCard) {
    User user = payCard.getUser();
    LoyaltyCard loyaltyCard = user.getLoyaltyCard();
    LoyaltyPointInterestRate rate = loyaltyCard.getInterestRate();
    double interestRate = rate.getPercent();
    double price = product.getPrice();
    double bonuses = price * interestRate;
    loyaltyCard.setBonuses(BigDecimal.valueOf(bonuses));
    loyaltyCard.setTotalSum(loyaltyCard.getTotalSum().add(BigDecimal.valueOf(price)));
    setNewInterestRate(loyaltyCard);
    payCard.setBalance(payCard.getBalance().min(BigDecimal.valueOf(price)));
    payCardDAO.savePayCard(payCard);
    loyaltyCardDao.saveLoyaltyCard(loyaltyCard);
    product.setStatus(ProductStatus.SOLD_OUT);
    product.setUser(user);
    return productRepository.save(product);
  }

  @Override
  public Product getProductById(long productId) {
    return productRepository.getOne(productId);
  }

  @Override
  public List<Product> getProductByShopId(long shopId) {
    return productRepository.findAllByShopId(shopId);
  }

  private void setNewInterestRate(LoyaltyCard loyaltyCard) {

  }
}
