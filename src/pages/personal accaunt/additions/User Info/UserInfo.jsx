import { FaEdit } from "react-icons/fa";
import "./UserInfo.scss";
import { useContext, useState } from "react";
import { Context } from "../../../../Hooks/Context";
import user from "../../../../assets/img/null user.svg"
import LoginSocial from "../Login social/LoginSocial";
import ChangeName from "../Change User info/ChangeName";
import ChangePhone from "../Change User info/ChangePhone";
import ChangeEmail from "../Change User info/ChangeEmail";


export default function UserInfo() {
      const { userInfo } = useContext(Context)
      const [changeName, setChangeName] = useState({ active: false, type: "" })
      const [changePhone, setChangePhone] = useState({ active: false, type: "" })
      const [changeEmail, setChangeEmail] = useState({ active: false, type: "" })

      return (
            <>
                  <div className='user_info'>
                        <h1 className="subTitle">Личные данные</h1>
                        <div className="info_wrap">
                              <div className="user_avatar">
                                    <img src={user} alt="" />
                                    <p>Загрузить фото</p>
                              </div>

                              <div className="user_data">
                                    <div className="data_item">
                                          <p className="title">ФИО</p>
                                          <p className="info">{userInfo.name ? userInfo.name : <span>Добавить</span>}</p>
                                          <FaEdit onClick={() => setChangeName(prev => ({ ...prev, active: true, type: userInfo?.name ? "change" : "add" }))} />
                                    </div>
                                    <div className="data_item">
                                          <p className="title">Телефон</p>
                                          <p className="info">{userInfo.phone ? userInfo.phone : <span>Добавить</span>}</p>
                                          <FaEdit onClick={() => setChangePhone(prev => ({ ...prev, active: true, type: userInfo?.name ? "change" : "add" }))} />
                                    </div>
                                    <div className="data_item">
                                          <p className="title">Email</p>
                                          <p className="info">{userInfo.email ? userInfo.email : <span>Добавить</span>}</p>
                                          <FaEdit onClick={() => setChangeEmail(prev => ({ ...prev, active: true, type: userInfo?.email ? "change" : "add" }))} />
                                    </div>

                                    <LoginSocial />
                              </div>

                              <ChangeName active={changeName} setActive={setChangeName} />
                              <ChangePhone active={changePhone} setActive={setChangePhone} />
                              <ChangeEmail active={changeEmail} setActive={setChangeEmail} />
                        </div>
                  </div>
            </>
      )
}
