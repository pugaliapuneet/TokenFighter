import React, {useState, useEffect} from 'react';

import grid from '../images/grid.svg';
import { Row, Col, ButtonGroup, Button, Container } from 'react-bootstrap';
import {AllFighters, MyFighters} from '../components/Fighters';
import {  JsonRpcProvider } from "@ethersproject/providers";
import { useExternalContractLoader } from "../hooks";

import { INFURA_ID, DAI_ADDRESS, DAI_ABI } from "../constants";
import save from "./../images/save.svg";

const mainnetProvider = new JsonRpcProvider("https://kovan.infura.io/v3/"+INFURA_ID)

const CollectScreen = () => {
  const contract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI);
  const [view, setView] = useState('AllFighters');
  const [fighterCount, setFighterCount] = useState(0);
  const [myCollectionCount, setMyCollectionCount] = useState(0);

  const getFighterCount = (count) => {
    setFighterCount(count);
  };

  useEffect(() => async () => {
    if(contract){
      const bal = (await contract.functions.balanceOf("0x53d885CaE2b7Cb1738E4e36F29c365c5e4383dB0"))[0];
      let counts = 0;
      for (let i = 0; i < bal.toNumber(); i++) {
          const tokenId = (await contract.functions.tokenOfOwnerByIndex("0x53d885CaE2b7Cb1738E4e36F29c365c5e4383dB0", i))[0];
          const hash = (await contract.functions.tokenTKFR(tokenId))[0];
          counts++;
      }
      setMyCollectionCount(counts);
    }
  }, [contract]);

  const getMyCollectionCount = (count) => {
    setMyCollectionCount(count);
  };

  return (
    <div style={{ backgroundImage: "url(" + grid + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
      <Row className="mx-0 mt-5" >
        <Col className="text-center" md={{ span: 6, offset: 3 }}>
          <div className="wallet_table">
              <Row className="px-4 py-3">
                <Col className="d-flex align-items-center" md={3}>
                  <h4 className="mb-0" style={{ letterSpacing: '0.02em', color: '#5A73D6' }}>My Wallet</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-end" md={{ span: 3, offset: 6 }}>
                    <Button className='claim_byte_btn rounded-0 px-5'>Claim Bytes</Button>
                </Col>
              </Row>
              <Row className="m-0 text-white">
                <Col className="py-3 " md={2} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '25px'}}>0.00</span> TK
                </Col>
                <Col className="py-3" md={3} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={save} alt="save" style={{ marginTop: '-8px' }}/> <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '25px'}}>0.00</span> Bytes
                </Col>
                <Col className="py-3 px-4 d-flex align-items-center" md={7} style={{ border: '1px solid rgba(255,255,255,0.1)', fontSize : '25px' }}>
                    Total Supply 20,826,029 TK
                </Col>
              </Row>
          </div>
        </Col>
      </Row>
      <Row className="m-0 " >
        <Col className="text-center" md={{ span: 4, offset: 4 }}>
          <ButtonGroup className='mt-5 mb-2'>
            <Button variant={view === 'AllFighters' ? 'light' : 'outline-light'}  className='py-1 px-2 border-1 rounded-0 border-white' style={{ letterSpacing: '1px' }} onClick={() => { setView('AllFighters') }}>
              All Fighters ({fighterCount})
            </Button>
            <Button variant={view === 'MyCollection' ? 'light' : 'outline-light'} className='py-1 px-2 border-1 rounded-0 border-white' style={{ letterSpacing: '1px' }} onClick={() => { setView('MyCollection') }}>
              My Collection ({myCollectionCount})
            </Button>
            {/* <Button>Right</Button> */}
          </ButtonGroup>
        </Col>
      </Row>
      <Container>
          {/* <Image src={grid} alt='grid' className='collect-grid' /> */}
          {contract && view === 'AllFighters' && <AllFighters contract={contract} getFighterCount={getFighterCount}/>}
          {contract && view === 'MyCollection' && <MyFighters contract={contract} getMyCollectionCount={getMyCollectionCount}/>}
      </Container>
    </div>
  );
};

export default CollectScreen;
