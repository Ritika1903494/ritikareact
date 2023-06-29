import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Delete_modal= ({show,handleDelete, handleDeleteClose}) => {
    return (
<Modal show={show} onHide={ handleDeleteClose}>
      <Modal.Header closeButton>
        <Modal.Title>Fill the Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            Are you sure you want to delete?
        </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary"  onClick={ handleDeleteClose}>
          Cancel
        </Button>
        <Button variant="primary"  onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default Delete_modal;