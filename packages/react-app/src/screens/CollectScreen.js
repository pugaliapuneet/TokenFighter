import React from 'react';

import grid from '../images/grid.svg';
import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';

const CollectScreen = () => {
  return (
    <Row>
      <Col>
        <ButtonGroup size='lg' className='mb-2'>
          <Button size='lg' variant='primary' className='collect-btns'>
            All Fighters (0)
          </Button>
          <Button size='lg' variant='primary'>
            My Collection (0)
          </Button>
          {/* <Button>Right</Button> */}
        </ButtonGroup>
        <Image src={grid} alt='grid' className='collect-grid' />
      </Col>
    </Row>
  );
};

export default CollectScreen;
