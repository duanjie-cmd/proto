// @generated by protoc-gen-es v1.2.1
// @generated from file ibc/core/client/v1/client.proto (package ibc.core.client.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade_pb.js";

/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 *
 * @generated from message ibc.core.client.v1.IdentifiedClientState
 */
export const IdentifiedClientState = proto3.makeMessageType(
  "ibc.core.client.v1.IdentifiedClientState",
  () => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_state", kind: "message", T: Any },
  ],
);

/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 *
 * @generated from message ibc.core.client.v1.ConsensusStateWithHeight
 */
export const ConsensusStateWithHeight = proto3.makeMessageType(
  "ibc.core.client.v1.ConsensusStateWithHeight",
  () => [
    { no: 1, name: "height", kind: "message", T: Height },
    { no: 2, name: "consensus_state", kind: "message", T: Any },
  ],
);

/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 *
 * @generated from message ibc.core.client.v1.ClientConsensusStates
 */
export const ClientConsensusStates = proto3.makeMessageType(
  "ibc.core.client.v1.ClientConsensusStates",
  () => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "consensus_states", kind: "message", T: ConsensusStateWithHeight, repeated: true },
  ],
);

/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 *
 * @generated from message ibc.core.client.v1.ClientUpdateProposal
 */
export const ClientUpdateProposal = proto3.makeMessageType(
  "ibc.core.client.v1.ClientUpdateProposal",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subject_client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "substitute_client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 *
 * @generated from message ibc.core.client.v1.UpgradeProposal
 */
export const UpgradeProposal = proto3.makeMessageType(
  "ibc.core.client.v1.UpgradeProposal",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "plan", kind: "message", T: Plan },
    { no: 4, name: "upgraded_client_state", kind: "message", T: Any },
  ],
);

/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 *
 * @generated from message ibc.core.client.v1.Height
 */
export const Height = proto3.makeMessageType(
  "ibc.core.client.v1.Height",
  () => [
    { no: 1, name: "revision_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "revision_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * Params defines the set of IBC light client parameters.
 *
 * @generated from message ibc.core.client.v1.Params
 */
export const Params = proto3.makeMessageType(
  "ibc.core.client.v1.Params",
  () => [
    { no: 1, name: "allowed_clients", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

