import PropTypes from "prop-types"


export default function Features({ item }) {
      return (
            item.features && <section className="features">
                  <h3 className="subTitle">
                        Основные характеристики
                  </h3>
                  <div className="featuresList">
                        {item.features.map(({ key, value }, index) => {
                              return <div className={index % 2 === 0 ? "item" : "item white"} key={index}>
                                    <p>{key}</p>
                                    <p>{value}</p>
                              </div>
                        })}
                  </div>
            </section>
      )
}

Features.propTypes = {
      item: PropTypes.object.isRequired
}