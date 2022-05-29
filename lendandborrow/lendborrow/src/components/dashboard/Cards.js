import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import AvList from "./AvList";
function Cards({ title }) {
  return (
    <Card
      style={{
        backgroundColor: "#303030",
        color: "white",
        width: "100%",
      }}
    >
      <CardBody>
        <CardTitle tag="h5" style={{ textAlign: "left" }}>
          {title}
        </CardTitle>
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle> */}
        <AvList />
        {/* <Button>Button</Button> */}
      </CardBody>
    </Card>
  );
}

export default Cards;
