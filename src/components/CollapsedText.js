import Accordion from 'react-bootstrap/Accordion';

function CollapsedText({name, text, buttonComponent}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>
         {text}
         {buttonComponent}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CollapsedText;