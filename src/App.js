import { Typography } from "@material-ui/core";
import react from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div style={{ height: 60 }}>
      <Row style={{ height: 50 }}>
        <Col md={5}>
          <Row style={{ height: 40 }}>
            <Col md={5}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <ul>menur1</ul>
                <ul>menue2</ul>
              </div>
            </Col>
            <Col md={7}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <ul>Categories</ul>
                <ul>New IN</ul>
                <ul>Hot deals</ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={7}>
          <Row style={{ height: 40 }}>
            <Col md={1}>
              <div>
                <ul>Marchant Account</ul>
              </div>
            </Col>
            <Col md={8}>
              <div>
                <ul>Seach</ul>
              </div>
            </Col>
            <Col md={1}>
              <div>
                <ul>Icon1</ul>
              </div>
            </Col>
            <Col md={1}>
              <div>
                <ul>Icon2</ul>
              </div>
            </Col>
            <Col md={1}>
              <div>
                <ul>Icon3</ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
