import React, {useState, useEffect} from 'react';
import { Button } from 'antd';
import grid from '../images/grid.svg';
import { Row, Col, ButtonGroup, Container, Modal } from 'react-bootstrap';
import Countdown from 'react-countdown';
import {AllFighters, MyFighters} from '../components/Fighters';
import {  JsonRpcProvider } from "@ethersproject/providers";
import { useExternalContractLoader } from "../hooks";
import { parseUnits } from "@ethersproject/units";
import { Transactor } from "../helpers";

import { INFURA_ID, DAI_ADDRESS, DAI_ABI, TKMAIN_ADDRESS, TKMAIN_ABI } from "../constants";
import save from "./../images/save.svg";
import save_middle from "./../images/save_middle.svg";

const mainnetProvider = new JsonRpcProvider("https://kovan.infura.io/v3/"+INFURA_ID)

const CollectScreen = ({userProvider, address}) => {
  const gasPrice = parseUnits("20", "gwei");

  const contract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI);
  const TKMainContract = useExternalContractLoader(userProvider, TKMAIN_ADDRESS, TKMAIN_ABI);
  
  const [view, setView] = useState('AllFighters');
  const [fighterCount, setFighterCount] = useState(0);
  const [myCollectionCount, setMyCollectionCount] = useState(0);
  const [lastSigned, setLastSigned] = useState(0);
  const [byteBal, setByteBal] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [claimLoading, setClaimLoading] = useState(false);
  const [claimModal, setClaimModal] = useState(false);

  const getFighterCount = (count) => {
    setFighterCount(count);
  };
  
  const init = async () => {
    if(contract && address){
      contract.functions.balanceOf(address).then(bal => {
        setMyCollectionCount(bal[0].toNumber());
      });
    }
    if (TKMainContract && address) {
      const timestamp = (await TKMainContract.functions.lastSigned(address))[0];
      setLastSigned(timestamp.toNumber());
      const byteBal = (await TKMainContract.functions.balanceOf(address))[0];
      console.log("Byte Bal: ", byteBal.toNumber()/100000000);
      setByteBal(byteBal.toNumber()/100000000);
      const totalSupply = (await TKMainContract.functions.totalSupply())[0];
      console.log("totalSupply", totalSupply.toNumber());
      setTotalSupply((totalSupply.toNumber()/100000000).toFixed(2));
    }
  }

  useEffect(() => {
    init();
  }, [contract, TKMainContract]);

  const getMyCollectionCount = (count) => {
    setMyCollectionCount(count);
  };

  const txHandler = txInformation => {
    console.log("TX STATUS ", txInformation.transaction.status);
    if(txInformation.transaction.status === "confirmed") {
      console.log("TX Confirmed");
      init();
    }
  }
  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userProvider, gasPrice, txHandler);

  const doTrans = async () => {
    if(!TKMainContract) return;
    setClaimLoading(true);
    const returned = await tx(TKMainContract.functions.singIn());
    setClaimLoading(false);
  }

  const buyFighter = async (hash, setLoading) => {
    if(!TKMainContract) return;
    setLoading(true);
    tx(TKMainContract.functions.buyTKFR(hash)).then(result => setLoading(false));
  }

  const showClaimModal = () => {
    setClaimModal(true);
  }

  const hideClaimModal = () => {
    setClaimModal(false);
  }

  const nextSignInTime = (lastSigned + 86400)*1000;

  return (
    <div style={{ backgroundImage: "url(" + grid + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
      {address && <Row className="mx-0 mt-5" >
        <Col className="text-center" md={{ span: 6, offset: 3 }}>
          <div className="wallet_table">
              <Row className="px-4 py-3">
                <Col className="d-flex align-items-center" md={3}>
                  <h4 className="mb-0" style={{ letterSpacing: '0.02em', color: '#5A73D6' }}>My Wallet</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-end" md={{ span: 3, offset: 6 }}>
                    <Button
                      className='claim_byte_btn rounded-0 px-3'
                      onClick={showClaimModal}
                    >
                      Claim Bytes
                    </Button>
                </Col>
              </Row>
              <Row className="m-0 text-white">
                <Col className="py-3 " md={2} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '25px'}}>0.00</span> TK
                </Col>
                <Col className="py-3" md={3} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={save} alt="save" style={{ marginTop: '-8px' }}/> <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '25px'}}>{byteBal.toFixed(2)}</span> Bytes
                </Col>
                <Col className="py-3 px-4 d-flex align-items-center" md={7} style={{ border: '1px solid rgba(255,255,255,0.1)', fontSize : '25px' }}>
                    Total Supply 20,826,029 TK
                </Col>
              </Row>
          </div>
        </Col>
      </Row>}
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
          {contract && view === 'AllFighters' && <AllFighters contract={contract} byteBal={byteBal} buyFighter={buyFighter} getFighterCount={getFighterCount}/>}
          {contract && address && view === 'MyCollection' && <MyFighters contract={contract} address={address} getMyCollectionCount={getMyCollectionCount}/>}
      </Container>
      <Modal show={claimModal} onHide={hideClaimModal} contentClassName="claim_modal rounded-0" centered>
        <Modal.Header closeButton>
          <Modal.Title>My Bytes Breakdown</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-middle p-3">
            <img src={save_middle} alt="save"/> <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '32px'}}>100.00</span>
          </div>
          <Row className="mb-2">
            <Col sm={6} className="text-left title">
              Balance:
            </Col>
            <Col sm={6} className="text-right value d-flex align-items-center justify-content-end">
              {byteBal.toFixed(2)}
            </Col>
          </Row>
          <Row className="pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Col sm={6} className="text-left title">
              Unclaimed:
            </Col>
            <Col sm={6} className="text-right value d-flex align-items-center justify-content-end">
              {nextSignInTime > Date.now() ? "0.00" : "100.00"}
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <Col sm={6} className="text-left title">
              Total Bytes used:
            </Col>
            <Col sm={6} className="text-right value d-flex align-items-center justify-content-end">
              1,134,320.00
            </Col>
          </Row>
          <Row className="pb-4">
            <Col sm={6} className="text-left title">
              Total Bytes claimed:
            </Col>
            <Col sm={6} className="text-right value d-flex align-items-center justify-content-end">
              {totalSupply}
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-middle p-3">
            <Button
              variant="outline-light"
              className="claim_btn"
              onClick={doTrans}
              disabled={nextSignInTime > Date.now()}
              loading={claimLoading}
            >
              Claim
              &nbsp;
              {nextSignInTime > Date.now() && <Countdown 
                date={nextSignInTime}
                daysInHours={true}
                intervalDelay={0}
                precision={3}
                onComplete={() => setLastSigned(lastSigned)}
              />}
            </Button>
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default CollectScreen;
