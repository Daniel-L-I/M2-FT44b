import { connect } from "react-redux";
import React from "react";
import "./products.css";
import Card from "../Card/Card";

export function Products() {
  useEffect(() => {
    props.getStoreName();
  }, []);

  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">{props.storeName}</h1>

        <div className="productsList">
          {props.list.map((p) => (
            <Card key={p.id} name={p.name} price={p.price} id={p.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list,
    storeName: state.storeName,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getStoreName: () => dispatch(getStoreName()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
