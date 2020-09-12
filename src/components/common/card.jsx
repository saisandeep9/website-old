import React, { Component } from "react";
import CareersModal from "../common/careersModal";
// import ApplyJobModal from "./jobApplyModal";
// import { Link } from "react-router-dom";

class Card extends Component {
  state = {
    modal: {
      modalShow: false,
      showApplyJob: false,
    },
  };
  modalShow = (value) => {
    const modal = { ...this.state.modal };

    if (modal[value] === false) {
      modal[value] = true;

      this.setState({ modal });
    } else {
      modal[value] = false;

      this.setState({ modal });
    }
  };

  render() {
    const data = this.props.data;

    // console.log("data from the card", data.jobDescription !== undefined);
    return (
      <div>
        <div className="ccard ">
          <h6 className="">{data.titel}</h6>
          <p className="text-sm-left text-muted  ">{data.description}</p>
          {/* {console.log("data from cc ", data.jobDescription)} */}
          <button
            className="btn "
            style={{ background: "#393185", color: "#ffff" }}
            onClick={() => this.modalShow("modalShow")}
          >
            View JD
          </button>{" "}
          {data.jobDescription !== undefined && (
            <CareersModal
              show={this.state.modal.modalShow}
              onHide={() => this.modalShow("modalShow")}
              data={data.jobDescription}
            />
          )}
          &nbsp;&nbsp;
          {/*   <button
            className="btn btn-info"
            onClick={() => this.modalShow("showApplyJob")}
          >
            Apply
          </button>
          {/* {console.log("job", this.state.showApplyJob)} 
          <ApplyJobModal
            show={this.state.modal.showApplyJob}
            onHide={() => this.modalShow("showApplyJob")}
            data={data}
          />
       */}
        </div>{" "}
      </div>
    );
  }
}

export default Card;
