// @generated by protoc-gen-es v1.2.1
// @generated from file ibc/applications/nft_transfer/v1/transfer.proto (package ibc.applications.nft_transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 *
 * @generated from message ibc.applications.nft_transfer.v1.ClassTrace
 */
export const ClassTrace = proto3.makeMessageType(
  "ibc.applications.nft_transfer.v1.ClassTrace",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Params defines the set of IBC nft-transfer parameters.
 * NOTE: To prevent a nft from being transferred, set the
 * TransfersEnabled parameter to false.
 *
 * @generated from message ibc.applications.nft_transfer.v1.Params
 */
export const Params = proto3.makeMessageType(
  "ibc.applications.nft_transfer.v1.Params",
  () => [
    { no: 1, name: "send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

