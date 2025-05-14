import { EndpointId } from '@layerzerolabs/lz-definitions'
const avalanche_testnetContract = {
    eid: EndpointId.AVALANCHE_V2_TESTNET,
    contractName: 'MyOFT',
}
const hedera_testnetContract = {
    eid: EndpointId.HEDERA_V2_TESTNET,
    contractName: 'MyOFT',
}
export default {
    contracts: [{ contract: avalanche_testnetContract }, { contract: hedera_testnetContract }],
    connections: [
        {
            from: avalanche_testnetContract,
            to: hedera_testnetContract,
        },
        {
            from: hedera_testnetContract,
            to: avalanche_testnetContract,
        },
    ],
}
