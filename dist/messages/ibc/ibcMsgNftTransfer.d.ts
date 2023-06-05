import { MsgTransfer } from '../../proto/cosmos-ibc/ibc/applications/nft_transfer/tx.js';
export declare function createIBCMsgNftTransfer(sourcePort: string, sourceChannel: string, classId: string, tokenIds: string[], sender: string, receiver: string, revisionNumber: number, revisionHeight: number, timeoutTimestamp: string, memo?: string): {
    message: MsgTransfer;
    path: string;
};
//# sourceMappingURL=ibcMsgNftTransfer.d.ts.map