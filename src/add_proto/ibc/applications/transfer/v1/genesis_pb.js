// @generated by protoc-gen-es v1.2.1
// @generated from file ibc/applications/transfer/v1/genesis.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { DenomTrace, Params } from "./transfer_pb.js";

/**
 * GenesisState defines the ibc-transfer genesis state
 *
 * @generated from message ibc.applications.transfer.v1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "ibc.applications.transfer.v1.GenesisState",
  () => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom_traces", kind: "message", T: DenomTrace, repeated: true },
    { no: 3, name: "params", kind: "message", T: Params },
  ],
);

