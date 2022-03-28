import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, InputGroup } from 'react-bootstrap';

function BikeThefts() {
  return (
    <div className="container-fluid">
      <Form autoComplete="off" spellCheck="false">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Form.Control id="description" placeholder="Search case descriptions" size="sm" />
          </div>
          <div className="col mb-3">
            <InputGroup size="sm">
              <Form.Control id="from" placeholder="from" />
              <Button variant="primary" id="from-date">
                <FontAwesomeIcon icon={ ['far', 'calendar-days'] } />
              </Button>
            </InputGroup>
          </div>
          <div className="col mb-3">
            <InputGroup size="sm">
              <Form.Control id="to" placeholder="to" />
              <Button variant="primary" id="to-date">
                <FontAwesomeIcon icon={ ['far', 'calendar-days'] } />
              </Button>
            </InputGroup>
          </div>
          <div className="col mb-3">
          <Form.Control id="find-cases" placeholder="Find cases" size="sm" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export { BikeThefts };
