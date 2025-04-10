import { deliveryTypes } from "../../../../Constants/Data"

export default function Delivery() {
      return (
            <section className="delivery">
                  <h3>Доставка</h3>
                  {deliveryTypes.map(({ id, icon, typeName, dayOf, price, toFree }) => {
                        return <div className="type" key={id}>
                              <img src={icon} alt="" />
                              <p>{typeName}</p>
                              <p>{dayOf}</p>
                              <div className="prices">
                                    <p>{price}</p>
                                    <span>{toFree ? `Бесплатно от ${toFree} грн` : null}</span>
                              </div>
                        </div>
                  })}
            </section>
      )
}
