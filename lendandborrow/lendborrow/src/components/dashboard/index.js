import React from "react";
// import Activity from "./activity";
import Blubs from "./Blubs";
import Cards from "./Cards";
import Chart from "./Chart";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Activity from "./activity";
function Dashboard() {
  // const [ismodalVisible, setModalOpen] = useState(false);
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#000",
        marginLeft: 300,
        width: "calc(100% - 300px)",
        // display: "flex",
        padding: "50px 20px",
        overflow: "auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 2, width: "70%" }}>
          <div
            style={{
              justifyContent: "space-arround",
              flex: 1,
              width: "100%",
              textAlign: "left",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <button
              // onClick={setModalOpen(true)}
              style={{
                padding: 20,
                margin: 10,
                borderRadius: 10,
                backgroundColor: "#19382F",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Add Expenses
            </button>
            {/* <Modal centered toggle={ismodalVisible}>
              <ModalHeader toggle={ismodalVisible}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={setModalOpen(false)}>
                  Do Something
                </Button>{" "}
                <Button onClick={setModalOpen(false)}>Cancel</Button>
              </ModalFooter>
            </Modal> */}
            <button
              style={{
                padding: 20,
                textTransform: "uppercase",
                borderRadius: 10,
                backgroundColor: "#A04E33",
                color: "white",
              }}
            >
              Settle Up
            </button>
          </div>
          <div
            style={{
              // flexWrap: "wrap",
              // flex: 1,
              display: "flex",
              color: "#fff",
              // alignItems: "flex-end",
              // justifyContent: "space-evenly",
            }}
          >
            <Blubs title={"Total Balance"} value="100" />
            <Blubs title={"You Owe"} value="200" />
            <Blubs title={"You are Owned"} value="300" />
          </div>
        </div>
        <div style={{ flex: 1, width: "30%", backgroundColor: "pink" }}>
          <Chart />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          columnCount: 2,
        }}
      >
        <div style={{ flex: 2, display: "flex" }}>
          <Cards title={"YOU OWE"} />
          <Cards title={"YOU OWED"} />
        </div>
        <div style={{ flex: 1 }}>
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
