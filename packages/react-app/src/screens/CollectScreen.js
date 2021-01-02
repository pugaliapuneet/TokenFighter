import React, {useState} from 'react';

import grid from '../images/grid.svg';
import { Row, Col, ButtonGroup, Button, Container } from 'react-bootstrap';
import {AllFighters, MyFighters} from '../components/Fighters';
import {  JsonRpcProvider } from "@ethersproject/providers";
import { useExternalContractLoader } from "../hooks";


import { INFURA_ID, DAI_ADDRESS, DAI_ABI } from "../constants";

const mainnetProvider = new JsonRpcProvider("https://kovan.infura.io/v3/"+INFURA_ID)

const CollectScreen = () => {
  const contract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI);
  const [view, setView] = useState('AllFighters');
  return (
    <div style={{ backgroundImage: "url(" + grid + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
      <Row className="m-0 " >
        <Col className="text-center" md={{ span: 4, offset: 4 }}>
          <ButtonGroup className='mt-5 mb-2'>
            <Button variant={view === 'AllFighters' ? 'light' : 'outline-light'}  className='py-1 px-2 border-1 rounded-0 border-white' style={{ letterSpacing: '1px' }} onClick={() => { setView('AllFighters') }}>
              All Fighters (0)
            </Button>
            <Button variant={view === 'MyCollection' ? 'light' : 'outline-light'} className='py-1 px-2 border-1 rounded-0 border-white' style={{ letterSpacing: '1px' }} onClick={() => { setView('MyCollection') }}>
              My Collection (0)
            </Button>
            {/* <Button>Right</Button> */}
          </ButtonGroup>
        </Col>
      </Row>
      <Container>
          {/* <Image src={grid} alt='grid' className='collect-grid' /> */}
          {contract && view === 'AllFighters' && <AllFighters contract={contract} />}
          {contract && view === 'MyCollection' && <MyFighters contract={contract} />}
      </Container>
    </div>
  );
};

export default CollectScreen;
