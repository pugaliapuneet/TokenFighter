import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Spin } from 'antd';
import {Col, Row} from 'react-bootstrap';

const Fighters = {
    "QmZwW6aA3UspgxBXiU66dtECbmN68gWLuxAyqYk3SLECRD": {
        RarityLevel: "Godlike",
        MiningPower: 1500,
        "name": "Arthur Hayes",
        "display": "Arthur",
        "ipfs_hash": "QmZwW6aA3UspgxBXiU66dtECbmN68gWLuxAyqYk3SLECRD",
        "image": "https://staging.tokenfighter.io/arthur.2c96042602a5a864f1ed.png",
        "external_url": "https://tokenfighter.io",
        "description": "Recognized as the God of all Degens and the first to offer 100x leverage trading on bitcoin derivatives, Arthur Hayes once famously shouted, 'IT'S A FUCKING BULL MARKET ARE YOU READY!!!!!'."
    },
    "QmUeoHCE5FVmDZfVi26BZYFWMBJpSV4L25G63y7hWGpt6r": {
        RarityLevel: "Legendary",
        MiningPower: 750,
        "name": "CZ Bruce Lee",
        "display": "CZ EX",
        "ipfs_hash": "QmUeoHCE5FVmDZfVi26BZYFWMBJpSV4L25G63y7hWGpt6r",
        "image": "https://staging.tokenfighter.io/cz_ex.45884eafb176c987b934.png",
        "external_url": "https://tokenfighter.io",
        "description": "Roar like a striking tiger, CZ unleashes all rage and transforms himself into CZ Bruce Lee the Tiger King."
    },
    "QmRDfXw8KCsYf5aczbewJRBADkyriDAhbbmV4nh4T8W5zw": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "CZ Hoody",
        "display": "CZ",
        "ipfs_hash": "QmRDfXw8KCsYf5aczbewJRBADkyriDAhbbmV4nh4T8W5zw",
        "image": "https://staging.tokenfighter.io/cz.0a46912fa7528ec9e6f7.png",
        "external_url": "https://tokenfighter.io",
        "description": "Changpeng Zhao (aka 'CZ') launched Binance in July 2017 and has since grown it into the world’s largest cryptocurrency exchange for retail investors. In addition to steering Binance, CZ has also become a social media personality in his own right with his trademark 'funds are safu' launched into the crypto-meme hall of fame."
    },
    // "QmZtiZbMzEFKJmFmTPjrx9ox4xp2FCe28PiJqyZf6kSEet": {
    //     RarityLevel: "Rare",
    //     MiningPower: 375,
    //     "name": "Hayden Adams",
    //     "display": "Hayden",
    //     "ipfs_hash": "QmZtiZbMzEFKJmFmTPjrx9ox4xp2FCe28PiJqyZf6kSEet",
    //     "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/hayden_f.png",
    //     "external_url": "https://tokenfighter.io",
    //     "description": "Arguably the most admiral individual contributing to DeFi's 2020 meteoric rise, Hayden Adams founded the degenerates' favorite decentralized exchange Uniswap that has continued to ridicule and surpass trading volumes of centralized exchanges."
    // },
    "QmZbaasvqZfRvMFqJ44Mt156WRwu75Qas4p3Q8oTidaokS": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Sam Bankman Fried",
        "display": "SBF",
        "ipfs_hash": "QmZbaasvqZfRvMFqJ44Mt156WRwu75Qas4p3Q8oTidaokS",
        "image": "https://staging.tokenfighter.io/sam.edc7f0b2bdda80c4b4aa.png",
        "external_url": "https://tokenfighter.io",
        "description": "Acknowledged as one of the largest liquidity providers within the cryptocurrency industry with Alameda Research, Sam Bankman Fried also founded FTX - an innovative and exotic derivatives exchange. He thinks Ethereum is not scalable and fast enough for his DEX trading's appetite; thereby, he founded and built Serum on Solana Blockchain."
    },
    "QmTRMC9bbGqgMAYMfxR8vBYVyY58zhP9oAuZ8nQfxykYiw": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Andre Cronje",
        "display": "Andre",
        "ipfs_hash": "QmTRMC9bbGqgMAYMfxR8vBYVyY58zhP9oAuZ8nQfxykYiw",
        "image": "https://staging.tokenfighter.io/andre.fdf3edbf4cd502bc5ffc.png",
        "external_url": "https://tokenfighter.io",
        "description": "Considered as The Godfather of DeFi, Andre Cronje founded the decentralized finance (DeFi) project Yearn Finance (YFI) and has been notoriously well known for his famous 'test in prod' statement."
    },
    "QmQYDW5gwTS51LBGDsPTrQWS38oEdrQgDPLdRtMqTxRDXC": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Robert Leshner",
        "display": "Robert",
        "ipfs_hash": "QmQYDW5gwTS51LBGDsPTrQWS38oEdrQgDPLdRtMqTxRDXC",
        "image": "https://staging.tokenfighter.io/robert.c68a935fa2fe2a985630.png",
        "external_url": "https://tokenfighter.io",
        "description": "Founder of Compound Finance, Robert Leshner has been instrumental in accelerating the adoption and awareness of DeFi. Since the introduction of the Compound’s governance token, COMP, it has inspired a new wave of yield farmers and liquidity miners to spearhead the DeFi revolution."
    },
    "QmRpv73SwT1vrtJWZmmEgesV3nbSaba5QVDH1n8MtdCT7h": {
        RarityLevel: "Epic",
        MiningPower: 37.5,
        "name": "Wars",
        "display": "Wars",
        "ipfs_hash": "QmRpv73SwT1vrtJWZmmEgesV3nbSaba5QVDH1n8MtdCT7h",
        "image": "https://staging.tokenfighter.io/wars.c0c75cc3533d71fda379.png",
        "external_url": "https://tokenfighter.io",
        "description": "When Mars and White is 'welded' into one, the 'Wrath' incarnates... Wars."
    },
    "QmadpA83WvJrSxPs58wAEjJRZNZH3cHwgKrfXnhZ5GoPHB": {
        RarityLevel: "Epic",
        MiningPower: 37.5,
        "name": "Viod",
        "display": "Void",
        "ipfs_hash": "QmadpA83WvJrSxPs58wAEjJRZNZH3cHwgKrfXnhZ5GoPHB",
        "image": "https://staging.tokenfighter.io/void.86a5645037d09ebdc30c.png",
        "external_url": "https://tokenfighter.io",
        "description": "Once, there was a man known as the champion. Now, at the same time Wars was born, a destructive reincarnation of his has returned...Void"
    },
    "QmdxzbXguVRoxFBounT3VSZcptAnNRSfDiicfdjCsjUeMZ": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Garen EX",
        "display": "Garen EX",
        "ipfs_hash": "QmdxzbXguVRoxFBounT3VSZcptAnNRSfDiicfdjCsjUeMZ",
        "image": "https://staging.tokenfighter.io/garen_ex.2c681b6b04f483466d11.png",
        "external_url": "https://tokenfighter.io",
        "description": "A true form of Garen. He has freed the power of the enchanted armor, causing it to break into pieces and Garen gaining much energy."
    },
    "QmTJ3jMJTCmhxiPW9JE1pkpCvByveLgos228gduZ5KDA11": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Draco",
        "display": "Draco",
        "ipfs_hash": "QmTJ3jMJTCmhxiPW9JE1pkpCvByveLgos228gduZ5KDA11",
        "image": "https://staging.tokenfighter.io/draco.2eed9cfb7cafbaa7035c.png",
        "external_url": "https://tokenfighter.io",
        "description": "This handsome fighter is the master of the bats. Of course, that does mean something in battles. He goes by the name Draco."
    },
    "QmdjpzgYhCT4dzK9xC1bissY2hEPsStBgXpuko4i4cyjh3": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Yasuo",
        "display": "Yasuo",
        "ipfs_hash": "QmdjpzgYhCT4dzK9xC1bissY2hEPsStBgXpuko4i4cyjh3",
        "image": "https://staging.tokenfighter.io/yasuo.e20a80256b78fc2f3711.png",
        "external_url": "https://tokenfighter.io",
        "description": "Almost nothing is known about Yasuo, except that he is the descendant of the Samurai who also practiced in the arts of Shinobi."
    },
    "QmXPT5ZCvVU2B9fcH5yWsjiEYSdrWHnjQ4aeJdjQsZLg57": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Robin",
        "display": "Robin",
        "ipfs_hash": "QmXPT5ZCvVU2B9fcH5yWsjiEYSdrWHnjQ4aeJdjQsZLg57",
        "image": "https://staging.tokenfighter.io/robin.2f97ea603e3bfebb8a01.png",
        "external_url": "https://tokenfighter.io",
        "description": "Rumored to have 'hunt'ed lives of one hundred men, Robin the archer is a superb long-range fighter."
    },
    "QmQMoCbj4PChkafLez9XNPwQDViYyLQDmZLHNtTnTgAi9X": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Magic",
        "display": "Magic",
        "ipfs_hash": "QmQMoCbj4PChkafLez9XNPwQDViYyLQDmZLHNtTnTgAi9X",
        "image": "https://staging.tokenfighter.io/magic.ffb09dbca8cdd4ec7480.png",
        "external_url": "https://tokenfighter.io",
        "description": "Magic is the legend among the wizards - most often called the 'Genius'."
    },
    "QmW35mCBQgdcdyWzUFXit7mBwUMWURSeWju69S2xFRwkJm": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Chopper",
        "display": "Chopper",
        "ipfs_hash": "QmW35mCBQgdcdyWzUFXit7mBwUMWURSeWju69S2xFRwkJm",
        "image": "https://staging.tokenfighter.io/chopper.5c811f8e550ba34ca1eb.png",
        "external_url": "https://tokenfighter.io",
        "description": "The rival of the Dragon, Chopper practices in the ancient arts of Tiger."
    },
    "QmXBXHkMPqbAmZRZro2xkjS6ahauBgvkKXVDpSqPmQC1cp": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Jarvan",
        "display": "Jarvan",
        "ipfs_hash": "QmXBXHkMPqbAmZRZro2xkjS6ahauBgvkKXVDpSqPmQC1cp",
        "image": "https://staging.tokenfighter.io/jarvan.c7d57b825f3b2ea4b880.png",
        "external_url": "https://tokenfighter.io",
        "description": "Long time a famed swordsman, Jarvan is the ultimate at melee warfare."
    },
    "QmVoTkiFCW6v2mwn9FCBYV97AFnLtxqXMDLJz342bDz4WL": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Shen",
        "display": "Shen",
        "ipfs_hash": "QmVoTkiFCW6v2mwn9FCBYV97AFnLtxqXMDLJz342bDz4WL",
        "image": "https://staging.tokenfighter.io/shen.123297dfaf180acd2fe1.png",
        "external_url": "https://tokenfighter.io",
        "description": "The one of the two children of Dragons, Shen is a young, yet gifted warrior."
    },
    "QmXe5MMHxQr7ggv86UfXeNuReCSjj7yCDFpoVRF1jYcQpU": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Lee",
        "display": "Lee",
        "ipfs_hash": "QmXe5MMHxQr7ggv86UfXeNuReCSjj7yCDFpoVRF1jYcQpU",
        "image": "https://staging.tokenfighter.io/lee.6b14e40bdb3e727e2aef.png",
        "external_url": "https://tokenfighter.io",
        "description": "Decendant of the art of the Dragons, Lee is one fast-paced fighter."
    },
    "QmTM4PMvqZeyBoF3aR9Q2RU3BryXXiyFdkRadKtUzXwzj3": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Garen",
        "display": "Garen",
        "ipfs_hash": "QmTM4PMvqZeyBoF3aR9Q2RU3BryXXiyFdkRadKtUzXwzj3",
        "image": "https://staging.tokenfighter.io/garen.1f4ec4316d4011953069.png",
        "external_url": "https://tokenfighter.io",
        "description": "Protected by an enchanted armor, Garen the knight is a martial art master."
    },
    "Qmai7KBpVspy1dRgLvZHEHn25GnnKoo3tKyE5MSgyBYRxR": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "White",
        "display": "White",
        "ipfs_hash": "Qmai7KBpVspy1dRgLvZHEHn25GnnKoo3tKyE5MSgyBYRxR",
        "image": "https://staging.tokenfighter.io/white.ad70b4bc0c180135e7e0.png",
        "external_url": "https://tokenfighter.io",
        "description": "'Man of Ice' - a nickname they have given him. No one knows White's real name nor true identity, nor even if 'he' is really a man."
    },
    "Qmf4Mw8qJxoJPxnFX19WR9PLnqY8C8uttBXJq2yo99iEVQ": {
        RarityLevel: "Extraordinary",
        MiningPower: 1,
        "name": "Mars",
        "display": "Mars",
        "ipfs_hash": "Qmf4Mw8qJxoJPxnFX19WR9PLnqY8C8uttBXJq2yo99iEVQ",
        "image": "https://staging.tokenfighter.io/mars.1b7cfd5bdcfc827e6101.png",
        "external_url": "https://tokenfighter.io",
        "description": "It is rumored that his art of fire symbolizes insanity. That's Mars the 'Arsonist'."
    },
    "Qmf9utvMLndgrKDwZjmjd7j83XWCdG3QGBtxBa2QXHruWF": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Gwei",
        "display": "Gwei",
        "ipfs_hash": "Qmf9utvMLndgrKDwZjmjd7j83XWCdG3QGBtxBa2QXHruWF",
        "image": "https://staging.tokenfighter.io/gwei.678d81177cdcfa599197.png",
        "external_url": "https://tokenfighter.io",
        "description": "Gwei is most commonly used when talking about gas (network transaction fees). Rather than saying your gas cost is 0.000000001 ether you can say 1 gwei.."
    },
    "QmPYMJGJGoNghB8bxXFRgj3juDNXzkDSMrBzK5ghQGMwo9": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Work",
        "display": "Work",
        "ipfs_hash": "QmPYMJGJGoNghB8bxXFRgj3juDNXzkDSMrBzK5ghQGMwo9",
        "image": "https://staging.tokenfighter.io/work.b5fd2e86f2dd86b12421.png",
        "external_url": "https://tokenfighter.io",
        "description": "A proof-of-work is a consensus mechanism. It deters denial-of-service attacks and other service abuses such as spam on a network by requiring some work from the service requester, usually meaning processing time by a computer. The concept was invented by Cynthia Dwork and Moni Naor as presented in a 1993 journal article."
    },
    "QmdQNN55HyHenHnJxeRL6rnFQ9t3d7y19dWn52UhWRDzqu": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Monk",
        "display": "Monk",
        "ipfs_hash": "QmdQNN55HyHenHnJxeRL6rnFQ9t3d7y19dWn52UhWRDzqu",
        "image": "https://staging.tokenfighter.io/monk.e9086bee13b1575bb66a.png",
        "external_url": "https://tokenfighter.io",
        "description": "A member of a religious community of men typically living under vows of poverty, chastity, and obedience."
    },
    "QmUB8H9CfLWiTirh6DJeEH3aFpxkwGEsQEnzf7rAcXpN4j": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Ada",
        "display": "Ada",
        "ipfs_hash": "QmUB8H9CfLWiTirh6DJeEH3aFpxkwGEsQEnzf7rAcXpN4j",
        "image": "https://staging.tokenfighter.io/ada.33444ad65964f20915ce.png",
        "external_url": "https://tokenfighter.io",
        "description": "Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She's the first to recognize that the machine had applications beyond pure calculation and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as one of the first to be a computer programmer."
    },
    "QmbZoNm2kLqBqRFhcjp2r2ARPv1oKaw7ctbGFUPFsbd2zR": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Base",
        "display": "Base",
        "ipfs_hash": "QmbZoNm2kLqBqRFhcjp2r2ARPv1oKaw7ctbGFUPFsbd2zR",
        "image": "https://staging.tokenfighter.io/base.c21127194283ac93237f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Rebasing is a feature of the Ampleforth protocol that alters the supply of the tokens. This means that the amount of AMPLs held in your wallet will be modified every 24 hours based on the weighted average of the token price throughout this time."
    },
    "QmUiKGwxp8cwQQVpdn8NrX9tXW4GpboYyQvrpLDtS1qpwz": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Null",
        "display": "Null",
        "ipfs_hash": "QmUiKGwxp8cwQQVpdn8NrX9tXW4GpboYyQvrpLDtS1qpwz",
        "image": "https://staging.tokenfighter.io/null.d07e28db6a309725a8d0.png",
        "external_url": "https://tokenfighter.io",
        "description": "In computing, a null pointer or null reference has a value saved for indicating that the pointer or reference does not refer to a valid object. Programs routinely use null pointers to represent conditions such as the end of a list of unknown lengths or the failure to perform some action; burning tokens refers to sending tokens to a null address."
    },
    "QmdqqsjuWTjXm1wCckjzpmRZsPXgLNi7Zg2mzu427CYXCi": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Stake",
        "display": "Stake",
        "ipfs_hash": "QmdqqsjuWTjXm1wCckjzpmRZsPXgLNi7Zg2mzu427CYXCi",
        "image": "https://staging.tokenfighter.io/stake.2126e3105491e29b8b9a.png",
        "external_url": "https://tokenfighter.io",
        "description": "Staking is the process of actively participating in transaction validation (similar to mining) on a proof-of-stake (PoS) blockchain. Anyone with a minimum-required balance of a specific cryptocurrency can validate transactions and earn Staking rewards on these blockchains."
    },
    "QmP2KDo54VAbGbbj2KzazZmVATLnAiPBH4vXxZXrBS2At1": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Frontr",
        "display": "Frontr",
        "ipfs_hash": "QmP2KDo54VAbGbbj2KzazZmVATLnAiPBH4vXxZXrBS2At1",
        "image": "https://staging.tokenfighter.io/frontr.ccf9a1609c420c9affe5.png",
        "external_url": "https://tokenfighter.io",
        "description": "A hunter by nature, and a team player."
    },
    "Qmc6MXofHijCExQaAZ2C2fzBcmrToeqhTTnb1TeusNmQjS": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Click",
        "display": "Click",
        "ipfs_hash": "Qmc6MXofHijCExQaAZ2C2fzBcmrToeqhTTnb1TeusNmQjS",
        "image": "https://staging.tokenfighter.io/click.0a270793292bd8acd7ad.png",
        "external_url": "https://tokenfighter.io",
        "description": "Baited."
    }
};

const FighterLeft = ({contract, hash}) => {
    const [loading, setLoading] = useState(true);
    const [left, setLeft] = useState(0);
    const getCount = async () => {
        const count = (await contract.functions.tkfrTokenCount(hash))[0];
        const total = (await contract.functions.tkfrInfoByTKFRUrl(hash))[4];
        const left = total.toNumber() === 999999 ? -1 : total.sub(count).toNumber();
        setLeft(left);
        setLoading(false);
    }

    useState(() => getCount(), []);

    return loading ? <div>loading...</div> : <div>
        <span style={{ fontSize: '18px', marginRight: '0.2em' }}>{left === -1 ? '∞' : left}</span> Left
    </div>;
}

const getFrameClass = (RarityLevel) => {
    if(RarityLevel === 'Godlike' || RarityLevel === 'Legendary'){
        return ' gold_white_bg ';
    }else if(RarityLevel === 'Rare'){
        return ' blue_white_bg ';
    }else{
        return ' grey_white_bg ';
    }
}
export function AllFighters({contract, byteBal, buyFighter, getFighterCount}) {
    const [collectLoading, setCollectLoading] = useState(false);
    useEffect(() => getFighterCount(Object.keys(Fighters).length));
    return (
        <Row className="mx-0">
            {
                Object.values(Fighters).map(element => {
                    const {RarityLevel, MiningPower, image, ipfs_hash, name} = element;
                    return (
                        <Col xs={4} key={ipfs_hash} className="mt-5 mb-3">
                            <Card className={"rounded-0 border-0" + getFrameClass(RarityLevel) } style={{backgroundColor : 'transparent' }}>
                                <div className="m-3"  style={{ position : 'relative'}}>
                                    <div style={{ marginTop : '-40px' }}>
                                        <img src={image} className="w-100" alt={name+" image"}/>
                                    </div>
                                    <div className="text-center" style={{ color : '#414141', letterSpacing: '0.1em' }}>
                                        <p>Rarity Level: {RarityLevel} <br/>
                                        Mining Power: {MiningPower}</p>
                                    </div>
                                    <div className="mb-5">
                                        <ul className="list-group list-group-horizontal w-100 text-center">
                                            <li className="list-group-item rounded-0 bg-transparent w-50 text-white border-left-0 d-flex justify-content-center" style={{ border : '1px solid rgba(255, 255, 255, 0.1)', fontSize:'12px', alignItems: 'baseline' }}> <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '18px', marginRight: '0.4em'}}>{MiningPower*100}</span> Bytes</li>
                                            <li className="list-group-item rounded-0 bg-transparent w-50 text-white border-right-0 d-flex justify-content-center" style={{ border : '1px solid rgba(255, 255, 255, 0.1)', fontSize:'12px', alignItems: 'baseline' }}><FighterLeft contract={contract} hash={ipfs_hash} /></li>
                                        </ul>
                                    </div>
                                    <div className="text-center w-100" style={{ position : 'absolute', bottom: '-25px' }}>
                                        <Button 
                                            type="primary"
                                            className="claim-fighter border-3 rounded-0 px-4 py-0"
                                            style={{ borderWidth: '3px', backgroundColor : '#000000' }}
                                            disabled={byteBal<MiningPower*100}
                                            onClick={() => buyFighter(ipfs_hash, setCollectLoading)}
                                            loading={collectLoading}
                                        >Collect</Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export function MyFighters({contract, address, getMyCollectionCount}) {
    const [loading, setLoading] = useState(true);
    const [myFighters, setMyFighters] = useState([]);
    const get = async () => {
        const bal = (await contract.functions.balanceOf(address))[0];
        let counts = {};
        let collectionCount = 0;
        for (let i = 0; i < bal.toNumber(); i++) {
            const tokenId = (await contract.functions.tokenOfOwnerByIndex(address, i))[0];
            const hash = (await contract.functions.tokenTKFR(tokenId))[0];
            collectionCount++;
            if(!counts[hash])
                counts[hash] = 1;
            else
                counts[hash] += 1;
        }
        let myFighters = [];
        for (let hash in counts) {
            const total = (await contract.functions.tkfrInfoByTKFRUrl(hash))[4];
            myFighters.push({
                ...Fighters[hash],
                count: counts[hash],
                total: total.toNumber() === 999999 ? '∞' : total.toNumber()
            });
        }
        getMyCollectionCount(collectionCount);
        setMyFighters(myFighters);
        setLoading(false);
    }

    useEffect(() => get());
    return loading ? <h1 className="text-center"><Spin /></h1> : (
        <Row className="mx-0">
            {
                myFighters.map(element => {
                    const {RarityLevel, MiningPower, image, ipfs_hash, count, total, name} = element;
                    return (
                        <Col xs={4} key={ipfs_hash} className="mt-5 mb-3">
                            <Card className={"rounded-0 " + getFrameClass(RarityLevel) } style={{backgroundColor : 'transparent' }}>
                                <div className="m-3"  style={{ position : 'relative'}}>
                                    <div style={{ marginTop : '-40px' }}>
                                        <img src={image} className="w-100" alt={name+" image"}/>
                                    </div>
                                    <div className="text-center" style={{ color : '#414141', letterSpacing: '0.1em' }}>
                                        <p>Rarity Level: {RarityLevel} <br/>
                                        Mining Power: {MiningPower}</p>
                                    </div>
                                    <div className="mb-5">
                                        <ul className="list-group list-group-horizontal w-100 text-center">
                                            <li className="list-group-item rounded-0 bg-transparent w-100 text-white border-left-0 border-right-0" style={{ border : '1px solid rgba(255, 255, 255, 0.1)' }}> Count {count}/{total} </li>
                                        </ul>
                                    </div>
                                    {/* <div className="text-center w-100" style={{ position : 'absolute', bottom: '-25px' }}>
                                        <Button variant="dark" className="rounded-0 px-4 py-1" style={{ border: '3px solid #ffffff', boxShadow : '0px 0px 10px #0AC4FF', backgroundColor : '#000000' }}>Collect</Button>
                                    </div> */}
                                </div>
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
    );
}