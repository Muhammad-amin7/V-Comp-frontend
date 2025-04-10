import { useEffect } from "react";
import Basket from "../../components/Basket/Basket";
import Comments from "../../components/Comments/Comments";
import GameZone from "../../components/GameZone/GameZone";
import Header from "../../components/Header/Header";
import InfoSayt from "../../components/InfoSayt/InfoSayt";
import NewsHome from "../../components/NewsHome/NewsHome";
import Partners from "../../components/Partners/Partners";
import ProductsList from "../../components/ProductsList/ProductsList";
import titleIMG from "../../assets/img/CashIcon.svg"
import { useLocation } from "react-router-dom";

export default function Home() {
  // title and favicon
  useEffect(() => {
    document.title = "V COMP - online computer shop"

    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = titleIMG;
    document.head.appendChild(link);
  }, [])
  return (
    <>
      <Basket />
      <Header />
      <ProductsList />
      <GameZone />
      <Comments />
      <Partners />
      <NewsHome />
      <InfoSayt />
    </>
  )
}
