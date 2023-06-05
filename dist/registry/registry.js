import { baseRegistryTypes, authzRegistryTypes, bankRegistryTypes, cryptoRegistryTypes, distributionRegistryTypes, erc20RegistryTypes, evmRegistryTypes, govRegistryTypes, ibcRegistryTypes, revenueRegistryTypes, stakingRegistryTypes, transactionsRegistryTypes, vestingRegistryTypes, } from '../messages/index.js';
const parseType = (registryTypes, typeName) => {
    for (const type of registryTypes) {
        if (`/${type.typeName}` === typeName) {
            return type;
        }
    }
    return undefined;
};
export const registryTypes = [
    ...baseRegistryTypes,
    ...authzRegistryTypes,
    ...bankRegistryTypes,
    ...cryptoRegistryTypes,
    ...distributionRegistryTypes,
    ...erc20RegistryTypes,
    ...evmRegistryTypes,
    ...govRegistryTypes,
    ...ibcRegistryTypes,
    ...revenueRegistryTypes,
    ...stakingRegistryTypes,
    ...transactionsRegistryTypes,
    ...vestingRegistryTypes,
];
export const registry = {
    findMessage: (typeName) => {
        return parseType(registryTypes, typeName);
    },
};
export const JSONOptions = {
    emitDefaultValues: true,
    enumAsInteger: true,
    useProtoFieldName: true,
    typeRegistry: registry,
};
//# sourceMappingURL=registry.js.map