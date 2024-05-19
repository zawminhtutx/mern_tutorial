import React from "react";
import Card from "./Card";

const List = (props) => {
  return (
    <>
      {
      props.userInfos.length >0 ?
      props.userInfos.map((info) =>(
        <Card key={info.email}>
          <div className="list">
            <p>Name: {info.name}</p>
            <p>From: {info.live}</p>
            <p>Email:{info.email}</p>
          </div>
        </Card>
      ))
      : <Card><p>Add new user now.!</p></Card>
    }
      
    </>
  );
};

export default List;
