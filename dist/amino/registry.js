import { createDefaultAminoConverters as createDefaultCosmosAminoConverters, AminoTypes as AminoTypesClass, } from '@cosmjs/stargate';
import { createRevenueAminoConverters, createERC20AminoConverters, createVestingAminoConverters, } from '../messages/index.js';
export function createDefaultAminoConverters() {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, createDefaultCosmosAminoConverters()), createRevenueAminoConverters()), createERC20AminoConverters()), createVestingAminoConverters());
}
export const AminoTypes = new AminoTypesClass(createDefaultAminoConverters());
//# sourceMappingURL=registry.js.map