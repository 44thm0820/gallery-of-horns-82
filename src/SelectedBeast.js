import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.nameOfBeast}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.nameOfBeast} is an important part of this community in SelectedBeast!
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;

