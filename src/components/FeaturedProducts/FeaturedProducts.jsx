import React from "react";
import "./featuredProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Shu, sit amet consectetur adipisicing elit. Aut animi nisi expedita
          doloribus quasi reprehenderit ducimus ipsam laboriosam sit iusto
          recusandae, quia sint laborum aperiam harum doloremque quo illo fugiat
          perspiciatis velit, qui ratione. Dolorum doloremque, officiis illum
          iusto suscipit deserunt placeat magni sit accusantium nulla nam nobis
          amet beatae?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "lodaing"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

