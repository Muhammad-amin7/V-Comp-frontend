import { FaEye, FaHeart, FaRegUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import "./Menus.scss";
// import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import UserInfo from "../User Info/UserInfo";
import { useNavigate, useParams } from "react-router-dom";
import Favorites from "../../../../components/Favorites/Favorites";

export default function Menus() {
      const { page: activePage } = useParams()
      console.log(activePage);
      const navigate = useNavigate()


      const menus = [
            { id: 0, icon: <FaBasketShopping />, text: "История заказов", slug: "Order_history" },
            { id: 1, icon: <FaHeart />, text: "Избранное", slug: "Favorites" },
            { id: 2, icon: <FaEye />, text: "Просмотренные товары", slug: "Viewed_products" },
            { id: 3, icon: <FaRegUser />, text: "Личные данные", slug: "Personal_information" },
      ];

      return (
            <div className="menus">
                  <Row>
                        <Col lg={4}>
                              <ul>
                                    {menus.map((menu) => (
                                          <li
                                                key={menu.id}
                                                className={activePage === menu.slug ? "active" : ""}
                                                onClick={() => navigate(`/personal/${menu.slug}`)}
                                          >
                                                {menu.icon} {menu.text}
                                          </li>
                                    ))}
                              </ul>
                        </Col>
                        <Col lg={8}>
                              {activePage === "Personal_information" && <UserInfo />}
                              {activePage === "Favorites" && <Favorites />}
                        </Col>
                  </Row>
            </div>
      );
}
