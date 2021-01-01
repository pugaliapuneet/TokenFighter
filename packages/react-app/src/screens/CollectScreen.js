import React from 'react';

import grid from '../images/grid.svg';
import { Row, Col, ButtonGroup, Button, Container } from 'react-bootstrap';
import {AllFighters, MyFighters} from '../components/Fighters';
import {  JsonRpcProvider } from "@ethersproject/providers";
import { useExternalContractLoader } from "../hooks";


import { INFURA_ID, DAI_ADDRESS, DAI_ABI } from "../constants";

const mainnetProvider = new JsonRpcProvider("https://kovan.infura.io/v3/"+INFURA_ID)

const CollectScreen = () => {
  const contract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI);
  return (
    <div style={{ backgroundImage: "url(" + grid + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
      <Row className="m-0 " >
        <Col className="text-center" md={{ span: 4, offset: 4 }}>
          <ButtonGroup className='mt-5 mb-2'>
            <Button variant='light' className='py-1 px-2 border-1 border-white rounded-0' style={{ letterSpacing: '1px' }} >
              All Fighters (0)
            </Button>
            <Button variant='outline-light' className='py-1 px-2 border-1 border-white rounded-0 background-transparent' style={{ letterSpacing: '1px' }} >
              My Collection (0)
            </Button>
            {/* <Button>Right</Button> */}
          </ButtonGroup>
        </Col>
      </Row>
      <Container>
          {/* <Image src={grid} alt='grid' className='collect-grid' /> */}
          {contract && <AllFighters contract={contract} />}
          {contract && <MyFighters contract={contract} />}
      </Container>
    </div>
  );
};

export default CollectScreen;
