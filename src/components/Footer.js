import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="socialContainer">
        <Row style={{ height: "50%" }}>
          <Col style={{ height: "50%" }}>
            <a
              className="btnYoutube socialBtn"
              href="https://www.youtube.com/channel/UC_tWt7pYW8k9qcqbe--JXWw"
            >
              <i className="fa fa-youtube-play socialBtn" />
            </a>{" "}
            <a
              className=" btnInstagram socialBtn"
              href="http://instagram.com/ventshowlive"
            >
              <i className="fa fa-instagram socialBtn" />
            </a>{" "}
            <a
              className="btnTwitter socialBtn"
              href="http://twitter.com/ventshowlive"
            >
              <i className="fa fa-twitter socialBtn" />
            </a>{" "}
          </Col>
        </Row>
        <p className="signature">Website Created by Justin Duncan</p>
      </Container>
    </footer>
  );
};

export default Footer;
