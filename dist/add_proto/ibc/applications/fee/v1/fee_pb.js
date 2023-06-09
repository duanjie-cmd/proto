// @generated by protoc-gen-es v1.2.1
// @generated from file ibc/applications/fee/v1/fee.proto (package ibc.applications.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";

/**
 * Fee defines the ICS29 receive, acknowledgement and timeout fees
 *
 * @generated from message ibc.applications.fee.v1.Fee
 */
export const Fee = proto3.makeMessageType(
  "ibc.applications.fee.v1.Fee",
  () => [
    { no: 1, name: "recv_fee", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "ack_fee", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "timeout_fee", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers
 *
 * @generated from message ibc.applications.fee.v1.PacketFee
 */
export const PacketFee = proto3.makeMessageType(
  "ibc.applications.fee.v1.PacketFee",
  () => [
    { no: 1, name: "fee", kind: "message", T: Fee },
    { no: 2, name: "refund_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * PacketFees contains a list of type PacketFee
 *
 * @generated from message ibc.applications.fee.v1.PacketFees
 */
export const PacketFees = proto3.makeMessageType(
  "ibc.applications.fee.v1.PacketFees",
  () => [
    { no: 1, name: "packet_fees", kind: "message", T: PacketFee, repeated: true },
  ],
);

/**
 * IdentifiedPacketFees contains a list of type PacketFee and associated PacketId
 *
 * @generated from message ibc.applications.fee.v1.IdentifiedPacketFees
 */
export const IdentifiedPacketFees = proto3.makeMessageType(
  "ibc.applications.fee.v1.IdentifiedPacketFees",
  () => [
    { no: 1, name: "packet_id", kind: "message", T: PacketId },
    { no: 2, name: "packet_fees", kind: "message", T: PacketFee, repeated: true },
  ],
);

