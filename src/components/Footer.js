import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="socialContainer">
        <Row style={{height:'50%'}}>
          <Col style={{height:'50%'}}>
            <a
              className="btnYoutube"
              href="https://www.youtube.com/channel/UC_tWt7pYW8k9qcqbe--JXWw"
            >
              <i className="fa fa-youtube-play socialBtn"  />
            </a>{" "}
            <a
              className=" btnInstagram"
              href="http://instagram.com/ventshowlive"
            >
              <i className="fa fa-instagram socialBtn" />
            </a>{" "}
            <a
              className="btnTwitter"
              href="http://twitter.com/ventshowlive"
            >
              <i className="fa fa-twitter socialBtn" />
            </a>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
