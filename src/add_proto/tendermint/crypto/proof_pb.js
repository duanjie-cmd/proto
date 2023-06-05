// @generated by protoc-gen-es v1.2.1
// @generated from file tendermint/crypto/proof.proto (package tendermint.crypto, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message tendermint.crypto.Proof
 */
export const Proof = proto3.makeMessageType(
  "tendermint.crypto.Proof",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "leaf_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "aunts", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ],
);

/**
 * @generated from message tendermint.crypto.ValueOp
 */
export const ValueOp = proto3.makeMessageType(
  "tendermint.crypto.ValueOp",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "proof", kind: "message", T: Proof },
  ],
);

/**
 * @generated from message tendermint.crypto.DominoOp
 */
export const DominoOp = proto3.makeMessageType(
  "tendermint.crypto.DominoOp",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "output", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 *
 * @generated from message tendermint.crypto.ProofOp
 */
export const ProofOp = proto3.makeMessageType(
  "tendermint.crypto.ProofOp",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * ProofOps is Merkle proof defined by the list of ProofOps
 *
 * @generated from message tendermint.crypto.ProofOps
 */
export const ProofOps = proto3.makeMessageType(
  "tendermint.crypto.ProofOps",
  () => [
    { no: 1, name: "ops", kind: "message", T: ProofOp, repeated: true },
  ],
);

