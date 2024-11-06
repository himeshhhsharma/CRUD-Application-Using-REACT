import React from "react";
import ItemList from "./ItemList";

const Content = ({ handleCheck, handleDelete, items }) => {
  return (
    <>
      {items.length ? (
        <ItemList
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Emplty</p>
      )}
    </>
  );
};

export default Content;
