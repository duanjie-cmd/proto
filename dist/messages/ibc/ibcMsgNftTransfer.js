import { Height } from '../../proto/cosmos-ibc/ibc/core/client.js';
import { MsgTransfer } from '../../proto/cosmos-ibc/ibc/applications/nft_transfer/tx.js';
export function createIBCMsgNftTransfer(sourcePort, sourceChannel, classId, tokenIds, sender, receiver, revisionNumber, revisionHeight, timeoutTimestamp, memo) {
    const timeoutHeight = new Height({
        revisionNumber: BigInt(revisionNumber),
        revisionHeight: BigInt(revisionHeight),
    });
    const ibcMessage = new MsgTransfer({
        sourcePort,
        sourceChannel,
        classId,
        tokenIds,
        sender,
        receiver,
        timeoutHeight,
        timeoutTimestamp: BigInt(parseInt(timeoutTimestamp, 10)),
        memo: memo !== null && memo !== void 0 ? memo : '',
    });
    return {
        message: ibcMessage,
        path: MsgTransfer.typeName,
    };
}
//# sourceMappingURL=ibcMsgNftTransfer.js.map