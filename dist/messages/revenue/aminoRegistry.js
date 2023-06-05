import { MsgCancelRevenue, MsgRegisterRevenue, MsgUpdateRevenue, } from '../../proto/evmos/revenue/tx.js';
import { createAminoConverter } from '../../amino/objectConverter.js';
export function createRevenueAminoConverters() {
    return Object.assign(Object.assign(Object.assign({}, createAminoConverter(MsgCancelRevenue, 'evmos/MsgCancelRevenue')), createAminoConverter(MsgRegisterRevenue, 'evmos/MsgRegisterRevenue')), createAminoConverter(MsgUpdateRevenue, 'evmos/MsgUpdateRevenue'));
}
//# sourceMappingURL=aminoRegistry.js.map