import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Fighters = [
    {
        RarityLevel: "Godlike",
        MiningPower: 1500,
        fighters: [
            {
                "name": "Arthur Hayes",
                "display": "Arthur",
                "ipfs_hash": "QmZwW6aA3UspgxBXiU66dtECbmN68gWLuxAyqYk3SLECRD",
                "image": "https://staging.tokenfighter.io/arthur.2c96042602a5a864f1ed.png",
                "external_url": "https://tokenfighter.io",
                "description": "Recognized as the God of all Degens and the first to offer 100x leverage trading on bitcoin derivatives, Arthur Hayes once famously shouted, 'IT'S A FUCKING BULL MARKET ARE YOU READY!!!!!'."
            }
        ]
    },
    {
        RarityLevel: "Legendary",
        MiningPower: 750,
        fighters: [
            {
                "name": "CZ Bruce Lee",
                "display": "CZ EX",
                "ipfs_hash": "QmUeoHCE5FVmDZfVi26BZYFWMBJpSV4L25G63y7hWGpt6r",
                "image": "https://staging.tokenfighter.io/cz_ex.45884eafb176c987b934.png",
                "external_url": "https://tokenfighter.io",
                "description": "Roar like a striking tiger, CZ unleashes all rage and transforms himself into CZ Bruce Lee the Tiger King."
            }
        ]
    },
    {
        RarityLevel: "Rare",
        MiningPower: 375,
        fighters: [
            {
                "name": "CZ Hoody",
                "display": "CZ",
                "ipfs_hash": "QmRDfXw8KCsYf5aczbewJRBADkyriDAhbbmV4nh4T8W5zw",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/cz_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "Changpeng Zhao (aka 'CZ') launched Binance in July 2017 and has since grown it into the world’s largest cryptocurrency exchange for retail investors. In addition to steering Binance, CZ has also become a social media personality in his own right with his trademark 'funds are safu' launched into the crypto-meme hall of fame."
            },
            {
                "name": "Hayden Adams",
                "display": "Hayden",
                "ipfs_hash": "QmZtiZbMzEFKJmFmTPjrx9ox4xp2FCe28PiJqyZf6kSEet",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/hayden_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "Arguably the most admiral individual contributing to DeFi's 2020 meteoric rise, Hayden Adams founded the degenerates' favorite decentralized exchange Uniswap that has continued to ridicule and surpass trading volumes of centralized exchanges."
            },
            {
                "name": "Sam Bankman Fried",
                "display": "SBF",
                "ipfs_hash": "QmZbaasvqZfRvMFqJ44Mt156WRwu75Qas4p3Q8oTidaokS",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/sbf_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "Acknowledged as one of the largest liquidity providers within the cryptocurrency industry with Alameda Research, Sam Bankman Fried also founded FTX - an innovative and exotic derivatives exchange. He thinks Ethereum is not scalable and fast enough for his DEX trading's appetite; thereby, he founded and built Serum on Solana Blockchain."
            },
            {
                "name": "Andre Cronje",
                "display": "Andre",
                "ipfs_hash": "QmTRMC9bbGqgMAYMfxR8vBYVyY58zhP9oAuZ8nQfxykYiw",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/andre_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "Considered as The Godfather of DeFi, Andre Cronje founded the decentralized finance (DeFi) project Yearn Finance (YFI) and has been notoriously well known for his famous 'test in prod' statement."
            },
            {
                "name": "Robert Leshner",
                "display": "Robert",
                "ipfs_hash": "QmQYDW5gwTS51LBGDsPTrQWS38oEdrQgDPLdRtMqTxRDXC",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/robert_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "Founder of Compound Finance, Robert Leshner has been instrumental in accelerating the adoption and awareness of DeFi. Since the introduction of the Compound’s governance token, COMP, it has inspired a new wave of yield farmers and liquidity miners to spearhead the DeFi revolution."
            }
        ]
    },
    {
        RarityLevel: "Effervescent",
        MiningPower: 112.5,
        fighters: []
    },
    {
        RarityLevel: "Epic",
        MiningPower: 37.5,
        fighters: [
            {
                "name": "Wars",
                "display": "Wars",
                "ipfs_hash": "QmRpv73SwT1vrtJWZmmEgesV3nbSaba5QVDH1n8MtdCT7h",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/wars_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "When Mars and White is 'welded' into one, the 'Wrath' incarnates... Wars."
            },
            {
                "name": "Viod",
                "display": "Void",
                "ipfs_hash": "QmadpA83WvJrSxPs58wAEjJRZNZH3cHwgKrfXnhZ5GoPHB",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/void_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "Once, there was a man known as the champion. Now, at the same time Wars was born, a destructive reincarnation of his has returned...Void"
            }
        ]
    },
    {
        RarityLevel: "Extraordinary",
        MiningPower: 18.75,
        fighters: [
            {
                "name": "Garen EX",
                "display": "Garen EX",
                "ipfs_hash": "QmdxzbXguVRoxFBounT3VSZcptAnNRSfDiicfdjCsjUeMZ",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/garen_ex_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "A true form of Garen. He has freed the power of the enchanted armor, causing it to break into pieces and Garen gaining much energy."
            },
            {
                "name": "Draco",
                "display": "Draco",
                "ipfs_hash": "QmTJ3jMJTCmhxiPW9JE1pkpCvByveLgos228gduZ5KDA11",
                "image": "https://raw.githubusercontent.com/TokenFighter/tk-metadata/master/img/draco_f.png",
                "external_url": "https://tokenfighter.io",
                "description": "This handsome fighter is the master of the bats. Of course, that does mean something in battles. He goes by the name Draco."
            }
        ]
    },
    {
        RarityLevel: "Classic",
        MiningPower: 1500,
        fighters: []
    },
    {
        RarityLevel: "Common",
        MiningPower: 1500,
        fighters: []
    }
];

const FighterLeft = ({contract, hash}) => {
    const [loading, setLoading] = useState(true);
    const [left, setLeft] = useState(0);
    const getCount = async () => {
        const count = await contract.functions.tkfrTokenCount(hash);console.log(count);
        const total = await contract.functions.tkfrInfoByTKFRUrl(hash);
        const left = total[0].sub(count[0]);
        setLeft(left.toNumber());
        setLoading(false);
    }

    getCount();

    return loading ? <div></div> : <div>
        {left} Left
    </div>;
}

export default function AllFighters({contract}) {
    return (
        <div>
            {
                Fighters.map(parent => {
                    const {RarityLevel, MiningPower} = parent;
                    return parent.fighters.map(child => {
                        return (
                            <Card key={child.ipfs_hash}>
                                <Card.Img variant="top" src={child.image} />
                                <p>Rarity Level: {RarityLevel}</p>
                                <p>Mining Power: {MiningPower}</p>
                                <p>{MiningPower*100} Bytes</p>
                                <FighterLeft contract={contract} hash={child.ipfs_hash} />
                            </Card>
                        );
                    })
                })
            }
        </div>
    );
}