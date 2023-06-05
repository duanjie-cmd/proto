// @generated by protoc-gen-es v1.2.1
// @generated from file ibc/applications/transfer/v1/transfer.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 *
 * @generated from message ibc.applications.transfer.v1.DenomTrace
 */
export const DenomTrace = proto3.makeMessageType(
  "ibc.applications.transfer.v1.DenomTrace",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 *
 * @generated from message ibc.applications.transfer.v1.Params
 */
export const Params = proto3.makeMessageType(
  "ibc.applications.transfer.v1.Params",
  () => [
    { no: 1, name: "send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

