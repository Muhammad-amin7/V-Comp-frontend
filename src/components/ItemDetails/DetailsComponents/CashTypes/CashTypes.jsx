import { paymentTypes } from '../../../../Constants/Data'

export default function CashTypes() {
      return (
            <section className="cashTypes">
                  <h3>Оплата</h3>
                  {paymentTypes.map(({ id, icon, typeName }) => {
                        return <div className="item" key={id}>
                              <img src={icon} alt="" />
                              <p>{typeName}</p>
                        </div>
                  })}
            </section>
      )
}
