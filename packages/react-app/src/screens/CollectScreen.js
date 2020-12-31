import React from 'react';

import grid from '../images/grid.svg';
import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
import {AllFighters, MyFighters} from '../components/Fighters';
import {  JsonRpcProvider } from "@ethersproject/providers";
import { useExternalContractLoader } from "../hooks";

import { INFURA_ID, DAI_ADDRESS, DAI_ABI } from "../constants";

const mainnetProvider = new JsonRpcProvider("https://kovan.infura.io/v3/"+INFURA_ID)

const CollectScreen = () => {
  const contract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI);
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
        {contract && <AllFighters contract={contract} />}
        {contract && <MyFighters contract={contract} />}
      </Col>
    </Row>
  );
};

export default CollectScreen;
