import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceContent from "./ServiceContent";
import "./Modal.css";
import ProjectContent from "./ProjectContent";
const Modal = ({ isOpen, handleClose, modalContent, sequence, data }) => {
  return (
    <>
      {isOpen && (
        <div
          className="modal fade show"
          id="customModal"
          tabIndex="-1"
          aria-labelledby="customModalLabel"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-header">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="btn-close"
                    onClick={handleClose}
                  ></FontAwesomeIcon>
                </div>
                {modalContent === "service" && <ServiceContent />}
                {modalContent === "project" && (
                  <ProjectContent sequence={sequence} data={data} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
