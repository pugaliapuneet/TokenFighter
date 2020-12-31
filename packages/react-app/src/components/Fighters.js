import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import contracts from '../contracts/contracts';

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
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/cz_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Changpeng Zhao (aka 'CZ') launched Binance in July 2017 and has since grown it into the world’s largest cryptocurrency exchange for retail investors. In addition to steering Binance, CZ has also become a social media personality in his own right with his trademark 'funds are safu' launched into the crypto-meme hall of fame."
    },
    "QmZtiZbMzEFKJmFmTPjrx9ox4xp2FCe28PiJqyZf6kSEet": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Hayden Adams",
        "display": "Hayden",
        "ipfs_hash": "QmZtiZbMzEFKJmFmTPjrx9ox4xp2FCe28PiJqyZf6kSEet",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/hayden_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Arguably the most admiral individual contributing to DeFi's 2020 meteoric rise, Hayden Adams founded the degenerates' favorite decentralized exchange Uniswap that has continued to ridicule and surpass trading volumes of centralized exchanges."
    },
    "QmZbaasvqZfRvMFqJ44Mt156WRwu75Qas4p3Q8oTidaokS": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Sam Bankman Fried",
        "display": "SBF",
        "ipfs_hash": "QmZbaasvqZfRvMFqJ44Mt156WRwu75Qas4p3Q8oTidaokS",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/sbf_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Acknowledged as one of the largest liquidity providers within the cryptocurrency industry with Alameda Research, Sam Bankman Fried also founded FTX - an innovative and exotic derivatives exchange. He thinks Ethereum is not scalable and fast enough for his DEX trading's appetite; thereby, he founded and built Serum on Solana Blockchain."
    },
    "QmTRMC9bbGqgMAYMfxR8vBYVyY58zhP9oAuZ8nQfxykYiw": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Andre Cronje",
        "display": "Andre",
        "ipfs_hash": "QmTRMC9bbGqgMAYMfxR8vBYVyY58zhP9oAuZ8nQfxykYiw",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/andre_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Considered as The Godfather of DeFi, Andre Cronje founded the decentralized finance (DeFi) project Yearn Finance (YFI) and has been notoriously well known for his famous 'test in prod' statement."
    },
    "QmQYDW5gwTS51LBGDsPTrQWS38oEdrQgDPLdRtMqTxRDXC": {
        RarityLevel: "Rare",
        MiningPower: 375,
        "name": "Robert Leshner",
        "display": "Robert",
        "ipfs_hash": "QmQYDW5gwTS51LBGDsPTrQWS38oEdrQgDPLdRtMqTxRDXC",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/robert_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Founder of Compound Finance, Robert Leshner has been instrumental in accelerating the adoption and awareness of DeFi. Since the introduction of the Compound’s governance token, COMP, it has inspired a new wave of yield farmers and liquidity miners to spearhead the DeFi revolution."
    },
    "QmRpv73SwT1vrtJWZmmEgesV3nbSaba5QVDH1n8MtdCT7h": {
        RarityLevel: "Epic",
        MiningPower: 37.5,
        "name": "Wars",
        "display": "Wars",
        "ipfs_hash": "QmRpv73SwT1vrtJWZmmEgesV3nbSaba5QVDH1n8MtdCT7h",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/wars_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "When Mars and White is 'welded' into one, the 'Wrath' incarnates... Wars."
    },
    "QmadpA83WvJrSxPs58wAEjJRZNZH3cHwgKrfXnhZ5GoPHB": {
        RarityLevel: "Epic",
        MiningPower: 37.5,
        "name": "Viod",
        "display": "Void",
        "ipfs_hash": "QmadpA83WvJrSxPs58wAEjJRZNZH3cHwgKrfXnhZ5GoPHB",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/void_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Once, there was a man known as the champion. Now, at the same time Wars was born, a destructive reincarnation of his has returned...Void"
    },
    "QmdxzbXguVRoxFBounT3VSZcptAnNRSfDiicfdjCsjUeMZ": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Garen EX",
        "display": "Garen EX",
        "ipfs_hash": "QmdxzbXguVRoxFBounT3VSZcptAnNRSfDiicfdjCsjUeMZ",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/garen_ex_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "A true form of Garen. He has freed the power of the enchanted armor, causing it to break into pieces and Garen gaining much energy."
    },
    "QmTJ3jMJTCmhxiPW9JE1pkpCvByveLgos228gduZ5KDA11": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Draco",
        "display": "Draco",
        "ipfs_hash": "QmTJ3jMJTCmhxiPW9JE1pkpCvByveLgos228gduZ5KDA11",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/draco_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "This handsome fighter is the master of the bats. Of course, that does mean something in battles. He goes by the name Draco."
    },
    "QmdjpzgYhCT4dzK9xC1bissY2hEPsStBgXpuko4i4cyjh3": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Yasuo",
        "display": "Yasuo",
        "ipfs_hash": "QmdjpzgYhCT4dzK9xC1bissY2hEPsStBgXpuko4i4cyjh3",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/yasuo_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Almost nothing is known about Yasuo, except that he is the descendant of the Samurai who also practiced in the arts of Shinobi."
    },
    "QmXPT5ZCvVU2B9fcH5yWsjiEYSdrWHnjQ4aeJdjQsZLg57": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Robin",
        "display": "Robin",
        "ipfs_hash": "QmXPT5ZCvVU2B9fcH5yWsjiEYSdrWHnjQ4aeJdjQsZLg57",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/robin_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Rumored to have 'hunt'ed lives of one hundred men, Robin the archer is a superb long-range fighter."
    },
    "QmQMoCbj4PChkafLez9XNPwQDViYyLQDmZLHNtTnTgAi9X": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Magic",
        "display": "Magic",
        "ipfs_hash": "QmQMoCbj4PChkafLez9XNPwQDViYyLQDmZLHNtTnTgAi9X",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/magic_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Magic is the legend among the wizards - most often called the 'Genius'."
    },
    "QmW35mCBQgdcdyWzUFXit7mBwUMWURSeWju69S2xFRwkJm": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Chopper",
        "display": "Chopper",
        "ipfs_hash": "QmW35mCBQgdcdyWzUFXit7mBwUMWURSeWju69S2xFRwkJm",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/chopper_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "The rival of the Dragon, Chopper practices in the ancient arts of Tiger."
    },
    "QmXBXHkMPqbAmZRZro2xkjS6ahauBgvkKXVDpSqPmQC1cp": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Jarvan",
        "display": "Jarvan",
        "ipfs_hash": "QmXBXHkMPqbAmZRZro2xkjS6ahauBgvkKXVDpSqPmQC1cp",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/jarvan_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Long time a famed swordsman, Jarvan is the ultimate at melee warfare."
    },
    "QmVoTkiFCW6v2mwn9FCBYV97AFnLtxqXMDLJz342bDz4WL": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Shen",
        "display": "Shen",
        "ipfs_hash": "QmVoTkiFCW6v2mwn9FCBYV97AFnLtxqXMDLJz342bDz4WL",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/shen_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "The one of the two children of Dragons, Shen is a young, yet gifted warrior."
    },
    "QmXe5MMHxQr7ggv86UfXeNuReCSjj7yCDFpoVRF1jYcQpU": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Lee",
        "display": "Lee",
        "ipfs_hash": "QmXe5MMHxQr7ggv86UfXeNuReCSjj7yCDFpoVRF1jYcQpU",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/lee_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Decendant of the art of the Dragons, Lee is one fast-paced fighter."
    },
    "QmTM4PMvqZeyBoF3aR9Q2RU3BryXXiyFdkRadKtUzXwzj3": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Garen",
        "display": "Garen",
        "ipfs_hash": "QmTM4PMvqZeyBoF3aR9Q2RU3BryXXiyFdkRadKtUzXwzj3",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/garen_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Protected by an enchanted armor, Garen the knight is a martial art master."
    },
    "Qmai7KBpVspy1dRgLvZHEHn25GnnKoo3tKyE5MSgyBYRxR": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "White",
        "display": "White",
        "ipfs_hash": "Qmai7KBpVspy1dRgLvZHEHn25GnnKoo3tKyE5MSgyBYRxR",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/white_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "'Man of Ice' - a nickname they have given him. No one knows White's real name nor true identity, nor even if 'he' is really a man."
    },
    "Qmf4Mw8qJxoJPxnFX19WR9PLnqY8C8uttBXJq2yo99iEVQ": {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        "name": "Mars",
        "display": "Mars",
        "ipfs_hash": "Qmf4Mw8qJxoJPxnFX19WR9PLnqY8C8uttBXJq2yo99iEVQ",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/mars_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "It is rumored that his art of fire symbolizes insanity. That's Mars the 'Arsonist'."
    },
    "Qmf9utvMLndgrKDwZjmjd7j83XWCdG3QGBtxBa2QXHruWF": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Gwei",
        "display": "Gwei",
        "ipfs_hash": "Qmf9utvMLndgrKDwZjmjd7j83XWCdG3QGBtxBa2QXHruWF",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/gwei_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Gwei is most commonly used when talking about gas (network transaction fees). Rather than saying your gas cost is 0.000000001 ether you can say 1 gwei.."
    },
    "QmPYMJGJGoNghB8bxXFRgj3juDNXzkDSMrBzK5ghQGMwo9": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Work",
        "display": "Work",
        "ipfs_hash": "QmPYMJGJGoNghB8bxXFRgj3juDNXzkDSMrBzK5ghQGMwo9",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/work_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "A proof-of-work is a consensus mechanism. It deters denial-of-service attacks and other service abuses such as spam on a network by requiring some work from the service requester, usually meaning processing time by a computer. The concept was invented by Cynthia Dwork and Moni Naor as presented in a 1993 journal article."
    },
    "QmdQNN55HyHenHnJxeRL6rnFQ9t3d7y19dWn52UhWRDzqu": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Monk",
        "display": "Monk",
        "ipfs_hash": "QmdQNN55HyHenHnJxeRL6rnFQ9t3d7y19dWn52UhWRDzqu",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/monk_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "A member of a religious community of men typically living under vows of poverty, chastity, and obedience."
    },
    "QmUB8H9CfLWiTirh6DJeEH3aFpxkwGEsQEnzf7rAcXpN4j": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Ada",
        "display": "Ada",
        "ipfs_hash": "QmUB8H9CfLWiTirh6DJeEH3aFpxkwGEsQEnzf7rAcXpN4j",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/ada_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She's the first to recognize that the machine had applications beyond pure calculation and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as one of the first to be a computer programmer."
    },
    "QmbZoNm2kLqBqRFhcjp2r2ARPv1oKaw7ctbGFUPFsbd2zR": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Base",
        "display": "Base",
        "ipfs_hash": "QmbZoNm2kLqBqRFhcjp2r2ARPv1oKaw7ctbGFUPFsbd2zR",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/base_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Rebasing is a feature of the Ampleforth protocol that alters the supply of the tokens. This means that the amount of AMPLs held in your wallet will be modified every 24 hours based on the weighted average of the token price throughout this time."
    },
    "QmUiKGwxp8cwQQVpdn8NrX9tXW4GpboYyQvrpLDtS1qpwz": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Null",
        "display": "Null",
        "ipfs_hash": "QmUiKGwxp8cwQQVpdn8NrX9tXW4GpboYyQvrpLDtS1qpwz",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/null_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "In computing, a null pointer or null reference has a value saved for indicating that the pointer or reference does not refer to a valid object. Programs routinely use null pointers to represent conditions such as the end of a list of unknown lengths or the failure to perform some action; burning tokens refers to sending tokens to a null address."
    },
    "QmdqqsjuWTjXm1wCckjzpmRZsPXgLNi7Zg2mzu427CYXCi": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Stake",
        "display": "Stake",
        "ipfs_hash": "QmdqqsjuWTjXm1wCckjzpmRZsPXgLNi7Zg2mzu427CYXCi",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/stake_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "Staking is the process of actively participating in transaction validation (similar to mining) on a proof-of-stake (PoS) blockchain. Anyone with a minimum-required balance of a specific cryptocurrency can validate transactions and earn Staking rewards on these blockchains."
    },
    "QmP2KDo54VAbGbbj2KzazZmVATLnAiPBH4vXxZXrBS2At1": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Frontr",
        "display": "Frontr",
        "ipfs_hash": "QmP2KDo54VAbGbbj2KzazZmVATLnAiPBH4vXxZXrBS2At1",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/frontr_f.png",
        "external_url": "https://tokenfighter.io",
        "description": "A hunter by nature, and a team player."
    },
    "Qmc6MXofHijCExQaAZ2C2fzBcmrToeqhTTnb1TeusNmQjS": {
        RarityLevel: "Common",
        MiningPower: 0.1,
        "name": "Click",
        "display": "Click",
        "ipfs_hash": "Qmc6MXofHijCExQaAZ2C2fzBcmrToeqhTTnb1TeusNmQjS",
        "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/click_f.png",
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
        const left = total == 999999 ? -1 : total.sub(count).toNumber();
        setLeft(left);
        setLoading(false);
    }

    useState(() => getCount(), []);

    return loading ? <div>loading...</div> : <div>
        {left == -1 ? '∞' : left} Left
    </div>;
}

export function AllFighters({contract}) {
    return (
        <div>
            {
                Object.values(Fighters).map(element => {
                    const {RarityLevel, MiningPower, image, ipfs_hash} = element;
                    return (
                        <Card key={ipfs_hash}>
                            <Card.Img variant="top" src={image} />
                            <p>Rarity Level: {RarityLevel}</p>
                            <p>Mining Power: {MiningPower}</p>
                            <p>{MiningPower*100} Bytes</p>
                            <FighterLeft contract={contract} hash={ipfs_hash} />
                        </Card>
                    );
                })
            }
        </div>
    );
}

export function MyFighters({contract}) {
    const [loading, setLoading] = useState(true);
    const [myFighters, setMyFighters] = useState([]);
    const get = async () => {
        const bal = (await contract.functions.balanceOf("0x53d885CaE2b7Cb1738E4e36F29c365c5e4383dB0"))[0];
        let counts = {};
        for (let i = 0; i < bal.toNumber(); i++) {
            const tokenId = (await contract.functions.tokenOfOwnerByIndex("0x53d885CaE2b7Cb1738E4e36F29c365c5e4383dB0", i))[0];
            const hash = (await contract.functions.tokenTKFR(tokenId))[0];
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
                total: total.toNumber() == 999999 ? '∞' : total.toNumber()
            });
        }
        setMyFighters(myFighters);
        setLoading(false);
    }

    useEffect(() => get(), []);
    
    return loading ? <div>Loading...</div> : (
        myFighters.map(element => {
            const {RarityLevel, MiningPower, image, ipfs_hash, count, total} = element;
            return (
                <Card key={ipfs_hash}>
                    <Card.Img variant="top" src={image} />
                    <p>Rarity Level: {RarityLevel}</p>
                    <p>Mining Power: {MiningPower}</p>
                    <p>Count {count}/{total}</p>
                </Card>
            );
        })
    );
}