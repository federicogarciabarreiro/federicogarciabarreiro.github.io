import Accordion from 'react-bootstrap/Accordion';

function CollapsedText({title, description, content}) {
  return (
    <>
    <Accordion className='width-full'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body >
         {description}
         {content ? (<>
          <hr/>
         {content}
         </>):(<></>)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default CollapsedText;