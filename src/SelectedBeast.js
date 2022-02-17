import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal 
          show={this.props.showModal} 
          onHide={this.props.handleCloseModal}
          size="xl"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.objBeast.title}
            </Modal.Title>
          </Modal.Header>
          <img
              onClick={this.props.objBeast.handleBeastClick}
              src={this.props.objBeast.imageUrl} 
              alt={this.props.objBeast.description}
              title={this.props.objBeast.title} 
          />
          <Modal.Body>
            {this.props.objBeast.description}
            {/* {this.props.objBeast.title} is an important part of this community!  */}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;

