import { Outlet, useParams } from "react-router-dom";
import { productData } from "../../Constants/ProductData";
import { useEffect, useState } from "react";
import "./ProductDetails.scss"
import ItemDetails from "../../components/ItemDetails/ItemDetails";

export default function ProductDetails() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const foundItem = productData.find((element) => element.id === Number(id));
    setItem(foundItem);

    // favicon + title 
    if (foundItem) {
      document.title = foundItem.name;
      const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
      link.rel = "icon";
      link.href = foundItem.image[0]; // Favicon URL
      document.head.appendChild(link);
    }

  }, [id]);


  if (!item) return <div><h1>Item not found</h1><Outlet to="/" /></div>;
  return (
    <div className="productDetails">
      <ItemDetails item={item} />
    </div>
  );
}
