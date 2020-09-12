import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class CareersModal extends Component {
  state = {};
  render() {
    const props = this.props;
    // console.log("props from card modal ");
    // props.responsibilities.map((r) => console.log(r));
    return (
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* {console.log("cereers modal page", Object.keys(props.data).length)} */}
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Job Description
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Responsibilities</h4>
            <ul>
              {props.data.responsibilities.map((r) => (
                <li>{r}</li>
              ))}
            </ul>

            <h4>Skills</h4>
            {/* <ul>{props.data.skills.map((s)=>(<li>{s}</li>)} */}

            <ul>
              {props.data.skills.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>

            {/* <ul>
              <li>Java</li>
              <li>React</li>
              {props.data.skills.length !== 0 &&
                props.data.skills.map((s) => <li>s </li>)}
            </ul> */}
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn"
              onClick={props.onHide}
              style={{ background: "#393185", color: "#ffff" }}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CareersModal;
