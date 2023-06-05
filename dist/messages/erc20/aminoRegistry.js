import { MsgConvertCoin, MsgConvertERC20 } from '../../proto/evmos/erc20/tx.js';
import { createAminoConverter } from '../../amino/objectConverter.js';
export function createERC20AminoConverters() {
    return Object.assign(Object.assign({}, createAminoConverter(MsgConvertCoin, 'evmos/MsgConvertCoin')), createAminoConverter(MsgConvertERC20, 'evmos/MsgConvertERC20'));
}
//# sourceMappingURL=aminoRegistry.js.map