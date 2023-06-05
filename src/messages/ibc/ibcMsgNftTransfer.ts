import { Height } from '../../proto/cosmos-ibc/ibc/core/client.js'
import { MsgTransfer } from '../../proto/cosmos-ibc/ibc/applications/nft_transfer/tx.js'

export function createIBCMsgNftTransfer(
  // Channel
  sourcePort: string,
  sourceChannel: string,
  classId: string,
  tokenIds: string[],
  // Addresses
  sender: string,
  receiver: string,
  // Timeout
  revisionNumber: number,
  revisionHeight: number,
  timeoutTimestamp: string,
  // Optional Memo
  memo?: string,
) {
  const timeoutHeight = new Height({
    revisionNumber: BigInt(revisionNumber),
    revisionHeight: BigInt(revisionHeight),
  })

  const ibcMessage = new MsgTransfer({
    sourcePort,
    sourceChannel,
    classId,
    tokenIds,
    sender,
    receiver,
    timeoutHeight,
    timeoutTimestamp: BigInt(parseInt(timeoutTimestamp, 10)),
    memo: memo ?? '',
  })

  return {
    message: ibcMessage,
    path: MsgTransfer.typeName,
  }
}
