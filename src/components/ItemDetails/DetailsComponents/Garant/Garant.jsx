import { garantyTypes } from '../../../../Constants/Data'

export default function Garant() {
      return (
            <section className="garant">
                  <h3>Гарантия</h3>
                  {garantyTypes.map(({ id, icon, typeName }) => {
                        return <div className="item" key={id}>
                              <img src={icon} alt="" />
                              <p>{typeName}</p>
                        </div>
                  })}
            </section>
      )
}
