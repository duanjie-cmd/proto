import { ExtensionOptionDynamicFeeTx } from '../../proto/ethermint/types/dynamicFee.js';
export function createDynamicFeeExtension(maxPriorityPrice) {
    const message = new ExtensionOptionDynamicFeeTx({
        maxPriorityPrice,
    });
    return {
        message,
        path: ExtensionOptionDynamicFeeTx.typeName,
    };
}
//# sourceMappingURL=dynamicFee.js.map