import { useState} from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import banter from "../app/assets/img/banter.png";
import { Field, Formik } from "formik";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const sendEmail = (e) => {
    setModalOpen(false);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qxglpcd",
        "template_zo4xeva",
        e.target,
        "xJivMVX_l4dvUFuyK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
  return (
    <div className="contact" id="Contact">
      <Row id="Contact">
        <Col className=" contentContactText" xs="12" md="4">
          <h1 className="contactTitle">Private Event Booking</h1>
          <br />
          <p>
            The creators of the Vent! Show want to come perform our show for
            your private party. Book us for birthdays, office parties,
            retirement parties, and more. We’ll provide the comedians and show
            materials. You provide the audience.
          </p>
          <br />
          <p>
            If you have any questions, contact the Vent! Live Team at
            ventlive@gmail.com
          </p>
          <br />
          <Button
            className="contactBtn"
            style={{ backgroundColor: "#F16A74", border: "solid 1px #F16A74" }}
            onClick={() => setModalOpen(true)}
          >
            Book an Event
          </Button>
        </Col>
        <Col className="background" xs="12" md="8">
          <img src={banter} alt="banter" className="contactPic md-4" />
        </Col>
      </Row>
      <Modal
        className="modal-dark"
        style={{ backgroundColor: "dark-gray" }}
        isOpen={modalOpen}
      >
        <ModalHeader toggle={() => setModalOpen(false)}>
          Book your Event!
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              day: "",
              month: "",
              year: "",
              hour: "",
              minute: "",
              amPm: "am",
              picked: "",
              email: "",
            }}
          >
            <Form
              onSubmit={sendEmail}
            >
              <FormGroup>
                <Label htmlFor="firstName">Name</Label>
                <Row>
                  <Col>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Field
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="day">Date of your event</Label>
                <Row>
                  <Col>
                    <Field
                      id="day"
                      name="day"
                      placeholder="Day"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Field
                      id="month"
                      name="month"
                      placeholder="Month"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Field
                      id="year"
                      name="year"
                      placeholder="Year"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="hour">Time of your event</Label>
                <Row>
                  <Col xs="3">
                    <Field
                      id="hour"
                      name="hour"
                      placeholder="Hour"
                      className="form-control"
                    />
                  </Col>
                  <Col xs="1">:</Col>
                  <Col>
                    <Field
                      id="minute"
                      name="minute"
                      placeholder="Minute"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Field
                      id="amPm"
                      name="amPm"
                      as="select"
                      className="form-control"
                    >
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </Field>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="picked">Select the type of event</Label>
                <Row>
                  <Field
                    id="picked"
                    name="picked"
                    type="radio"
                    value="virtual"
                  />
                  {"Virtual"}
                  <Field
                    id="picked"
                    name="picked"
                    type="radio"
                    value="in-Person"
                  />
                  {"In-Person Event"}
                  <Field
                    id="picked"
                    name="picked"
                    type="radio"
                    value="hybrid"
                  />
                  {"Hybrid Event"}

                  <Field
                    id="picked"
                    name="picked"
                    type="radio"
                    value="flexible"
                  />
                  {"Flexible (either one)"}
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="info">
                  Share any other details about your event
                </Label>
                <Field
                  as="textarea"
                  rows="5"
                  id="info"
                  name="info"
                  placeholder="Anything else you would like us to know? (e.g. occasion, corporate or personal, desired length of event, topics to avoid, etc.) "
                  className="form-control"
                />
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email">Your Email</Label>
                <Field
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="submit">
                  We'll be in touch within 48 hours!
                </Label>
                <Row>
                  <Button
                    type="submit"
                    className="form-control"
                    style={{
                      backgroundColor: "#F16A74",
                      border: "solid 1px #F16A74",
                      value: "send",
                    }}
                  >
                    Submit
                  </Button>
                </Row>
              </FormGroup>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
      <hr />
    </div>
  );
};

export default Contact;
