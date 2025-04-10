import { useContext, useState } from "react"
import { FaChevronRight, FaShoppingCart, FaStar } from "react-icons/fa"
import { RiMessage2Line } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import AddComment from "../Add new comment/AddComment";
import { Context } from "../../../../Hooks/Context";
import LoginModal from "../../../LoginModal/LoginModal";


export default function CommentsList() {
      const { commentsList, setCommentsList, passRegister } = useContext(Context)
      // show all comments
      const [showComments, setShowComments] = useState(3)
      // add new comment
      const [addNewComment, setAddNewComment] = useState(false)
      // 
      const [activeLogin, setActiveLogin] = useState(false)

      const handleOpenComment = () => {
            if (!passRegister) {
                  setActiveLogin('login')
            } else {
                  setAddNewComment(true)
            }
      }
      return (
            <>
                  <h3 className="subTitle">Отзывы ({commentsList.length})</h3>
                  <LoginModal login={activeLogin} setLogin={setActiveLogin} />
                  <section className="commentsList">
                        {commentsList.slice(0, showComments).map(({ id, userName, photo, stars, comment, pros, cons, like, date }) => {
                              return <div className="item" key={id}>
                                    <div className="image">
                                          <img src={photo} alt="" />
                                    </div>

                                    <div className="comment">
                                          <div className="top">
                                                <p className="name">{userName}</p>
                                                <p className="buyText">
                                                      <FaShoppingCart />
                                                      уже купил(а)
                                                </p>

                                                <div className="stars">
                                                      {Array(stars).fill().map((_, index) => (
                                                            <FaStar className='yellow' key={index} />
                                                      ))}
                                                </div>

                                                <p className="date">{date}</p>
                                          </div>

                                          <div className="main">
                                                <p className="text">{comment}</p>
                                                <p className='pros text'>
                                                      <span>Достоинства:</span>
                                                      {pros}
                                                </p>
                                                <p className="cons text">
                                                      <span>Недостатки:</span>
                                                      {cons}
                                                </p>
                                          </div>

                                          <div className="foot">
                                                <button onClick={() => setAddNewComment(true)}>
                                                      <RiMessage2Line />
                                                      Ответить
                                                </button>

                                                <button onClick={() => setCommentsList(prev => prev.map(item => item.id === id ? { ...item, like: item.like + 1 } : item))}>
                                                      <BiLike />
                                                      {like}
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        })}

                        <div className="commentsButton">
                              <button className='newComment' onClick={handleOpenComment}>ДОБАВИТЬ ОТЗЫВ</button>
                              <button className='showAllComments'
                                    onClick={() => setShowComments(prev => prev === 3 ? 100 : 3)}>
                                    {showComments === 3 ? "Смотреть все отзывы" : "Свернуть отзывы"} <FaChevronRight />
                              </button>
                        </div>

                        <AddComment active={addNewComment} setActive={setAddNewComment} />
                  </section >
            </>
      )
}
