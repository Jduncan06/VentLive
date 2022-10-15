import { useState } from "react";
import { Card, CardBody, Button, Col, Row, Container } from "reactstrap";
import Papa from "papaparse";
import { useEffect } from "react";

export const DatesList = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1kJMYOqRwKhN2c0wJQyp03lduto7ECAVDLhhGTtEAz9o/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
    })
  const show = Array.from(data);
  return (
    <Col className="cardContainer" style={{margin:0, padding: 0}}>
      {show.map((item, i) => (
        <Card className="datesCard" styles={{ backgroundColor: "black" }}>
          <CardBody
            key={i}
            className="cardInfo"
            style={{ backgroundColor: "black" }}
          >
            <Row>
              <Col xs="4" className="dateTime">
                <h4>{item.date}</h4>
                <p>{item.time}</p>
              </Col>
              <Col xs="5" className="cardInfo">
                <h4 style={{fontStyle:'bold', fontWeight:700}}>{item.location}</h4>
                <p style={{fontWeight:700}}>{item.venue}</p>
              </Col>
              <Col xs="2" className="cardButton">
                <Button
                  href={item.tickets}
                  style={{ backgroundColor: "#F16A74",
                          border: 'solid 1px #F16A74'
                        }}
                >
                  Get Tickets
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};

export default DatesList;
