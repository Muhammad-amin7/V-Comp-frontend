import { useContext, useState } from "react"
import { FaXmark } from "react-icons/fa6"
import { Context } from "../../../../Hooks/Context"
import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"
import Login from "../../../LoginModal/Login/Login"

export default function AddComment({ active, setActive }) {
      // stars clicked curent
      const [starCurrent, setStarCurrent] = useState()
      // stars hover curent
      const [starHover, setStarHover] = useState()
      //  User info context
      const { userInfo, setCommentsList, commentsList, passRegister } = useContext(Context)
      // 
      // const [toggleLogin, setToggleLogin] = useState(false)

      // new comment data obj
      const [newCommentData, setNewCommentData] = useState({
            userName: userInfo?.name || "",
            pros: "",
            cons: "",
            comment: "",
            id: commentsList.length,
            like: 0,
            data: "01.01.01",
            stars: starCurrent,
            photo: userInfo?.photo || ""
      })

      const handleNewComment = (e) => {
            e.preventDefault()
            setCommentsList(prev => [...prev, newCommentData])
            setNewCommentData({
                  userName: userInfo?.name || "",
                  pros: "",
                  cons: "",
                  comment: "",
                  id: 30,
                  like: 0,
                  data: "01.01.01",
                  stars: starCurrent,
                  photo: userInfo?.photo || ""
            })
            setActive(false)
      }

      return (
            <div className="newCommentsModal" style={{ display: active ? "flex" : "none" }}>
                  {passRegister ? <Login /> : null}
                  <div className="content">
                        <div className="head">
                              <p>Написать отзыв</p>
                              <FaXmark onClick={() => setActive(false)} />
                        </div>

                        <div className="stars">
                              {Array(5).fill(null).map((_, index) => {
                                    return <span key={index} className={index <= starHover ? "hover" : ""}>
                                          <FaStar
                                                onMouseEnter={() => setStarHover(index)}
                                                onMouseLeave={() => setStarHover(-1)}
                                                onClick={() => { setStarCurrent(index); setNewCommentData(prev => ({ ...prev, stars: index + 1 })) }}
                                                className={index <= starCurrent ? "active" : ""} />
                                    </span>
                              })}
                        </div>

                        <form action="">
                              <input type="text" placeholder="Имя" value={userInfo?.name || ""} />

                              <input type="text" placeholder="Email" value={userInfo?.email || ""} />

                              <input type="text" placeholder="Достоинства"
                                    onChange={(e) => setNewCommentData(prev => ({ ...prev, pros: e.target.value }))}
                                    value={newCommentData.pros} />

                              <input type="text" placeholder="Недостатки"
                                    onChange={(e) => setNewCommentData(prev => ({ ...prev, cons: e.target.value }))}
                                    value={newCommentData.cons} />
                              <input type="text" placeholder="Комментарий"
                                    onChange={(e) => setNewCommentData(prev => ({ ...prev, comment: e.target.value }))}
                                    value={newCommentData.comment} />
                              <div className="checkBox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Уведомлять об ответах по электронной почте</label>
                              </div>
                        </form>

                        <div className="foot">
                              <button className="cencel" onClick={() => setActive(false)}>ОТМЕНИТЬ</button>
                              <button onClick={(e) => handleNewComment(e)}>ДОБАВИТЬ ОТЗЫВ</button>
                        </div>
                  </div>
            </div>
      )
}


AddComment.propTypes = {
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired
}