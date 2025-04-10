import './LoginSocail.scss'

export default function LoginSocial() {
      const socailLogins = [
            { id: 0, name: "Google", icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
            { id: 1, name: "Facebook", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
      ]
      return (
            <div className='login_social'>
                  <h2>Социальные сети</h2>
                  <div className="social_wrap">
                        {socailLogins.map(({ id, name, icon }) => {
                              return <div className="social_item" key={id}>
                                    <img src={icon} alt={name + " " + "icon"} />
                                    <p>
                                          {name}
                                          <span>Связать с аккаунтом</span>
                                    </p>
                              </div>
                        })}
                  </div>
            </div >
      )
}
