import PropTypes from "prop-types";
import { FiGift } from "react-icons/fi";

export default function Bonus({ item }) {
      return (
            <section className="bonus">
                  <div className="left">
                        <span><FiGift /></span>
                  </div>
                  <div className="right">
                        <h3>Подарок!</h3>
                        <p>При покупке даного товара вы получаете в подарок:</p>
                        <div className="bonusProduct">
                              <img src={item.bonus[0]} alt="" />
                              <p>{item.bonus[1]}</p>
                        </div>
                  </div>
            </section>
      )
}

Bonus.propTypes = {
      item: PropTypes.object.isRequired
}