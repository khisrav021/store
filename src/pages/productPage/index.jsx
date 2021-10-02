import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, CardsWrapper, Form, Toggle } from "./style";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const [edit, setEdit] = useState({ edit: false, data: {} });

  const [open, setOpen] = useState(true);

  const getProducts = () => {
    axios
      .get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    const { name, price, description } = e.target;
    const form = {
      name: name.value,
      price: price.value,
      description: description.value,
    };

    axios
      .post(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/",
        form
      )
      .then((res) => {
        console.log("submitted successfuly");
        getProducts();
        e.target.reset();
      })
      .catch();
  };

  const updateForm = (e) => {
    e.preventDefault();

    const { name, price, description } = e.target;

    const form = {
      name: name.value,
      price: price.value,
      description: description.value,
    };

    axios
      .put(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" +
          edit.data.id,
        form
      )
      .then((res) => {
        console.log(res.data);
        getProducts();
        e.target.reset();
        setEdit({ edit: false, data: {} });
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" + id
      )
      .then()
      .catch()
      .finally(() => {
        getProducts();
      });
  };

  return (
    <div>
      <Toggle
        onClick={() => {
          setOpen(!open);
        }}
      >
        toggle
      </Toggle>
      <Form open={open} onSubmit={edit.edit ? updateForm : submitForm}>
        <input
          defaultValue={edit.edit ? edit.data.name : ""}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <input
          defaultValue={edit.edit ? edit.data.price : ""}
          type="number"
          name="price"
          placeholder="price"
          required
        />
        <textarea
          defaultValue={edit.edit ? edit.data.description : ""}
          name="description"
          rows="5"
          placeholder="description"
          required
        />
        <button>{edit.edit ? "update" : "submit"}</button>
      </Form>
      <CardsWrapper>
        {products?.map(({ id, name, price, description }) => (
          <Card key={id}>
            <h2>{name}</h2>
            <h2>$ {price}</h2>
            <h2>{description}</h2>
            <button
              className="green"
              onClick={() => {
                setEdit({ edit: true, data: { id, name, price, description } });
              }}
            >
              update
            </button>
            <button className="red" onClick={() => deleteProduct(id)}>
              delete
            </button>
          </Card>
        ))}
      </CardsWrapper>
    </div>
  );
}

export default ProductPage;
