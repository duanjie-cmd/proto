import { MsgClawback, MsgCreateClawbackVestingAccount, } from '../../proto/evmos/vesting/tx.js';
import { createAminoConverter } from '../../amino/objectConverter.js';
export function createVestingAminoConverters() {
    return Object.assign(Object.assign({}, createAminoConverter(MsgClawback, 'evmos/MsgClawback')), createAminoConverter(MsgCreateClawbackVestingAccount, 'evmos/MsgCreateClawbackVestingAccount'));
}
//# sourceMappingURL=aminoRegistry.js.map