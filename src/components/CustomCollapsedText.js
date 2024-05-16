import Accordion from 'react-bootstrap/Accordion';

{/*CustomCollapsedText recibe title, description y un component.*/}

function CustomCollapsedText({title, description, component}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
         {description}
         {component}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomCollapsedText;