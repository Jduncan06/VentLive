import { useState, useRef } from "react";
import { FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";

const VentForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycby3Q5sZHNQqGnNaVI9T57R11ES8wTTTk8pGWTjw9FLFO2wv1JcIp8N-h5TJalUytkXp/exec";

  const btnText = () => {
    if (loading) {
      return "Submitting...";
    } else if (submitted) {
      return "Thank you!";
    } else {
      return "Submit";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Formik
      className="ventForm"
      initialValues={{
        ventForm: "",
        name: "",
        email: "",
        Date: "",
      }}
    >
      <Form
        method="post"
        ref={formRef}
        name="google-sheet"
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Label htmlFor="ventText">Here is some space to Vent!</Label>
          <Field
            name="ventText"
            type="ventText"
            as="textarea"
            rows="6"
            className="form-control"
            placeholder="What grinds your gears?"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Your Name (First name is fine)</Label>
          <Field
            name="name"
            type="name"
            placeholder="Max Rosenblum"
            className="form-control"
            style={{ height: "100%", width: "100%" }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Join our mailing list!</Label>
          <Field
            name="email"
            type="email"
            placeholder="ventlive@gmail.com"
            className="form-control"
          />
        </FormGroup>
        <Button
          type="submit date"
          className="formBtn form-control"
          name="date"
          style={{ backgroundColor: "#F16A74", border: "solid 1px #F16A74" }}
        >
          {btnText()}
        </Button>
      </Form>
    </Formik>
  );
};

export default VentForm;
