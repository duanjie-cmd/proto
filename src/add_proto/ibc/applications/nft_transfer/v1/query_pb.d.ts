// @generated by protoc-gen-es v1.2.1
// @generated from file ibc/applications/nft_transfer/v1/query.proto (package ibc.applications.nft_transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ClassTrace, Params } from "./transfer_pb.js";
import type { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryClassTraceRequest
 */
export declare class QueryClassTraceRequest extends Message<QueryClassTraceRequest> {
  /**
   * hash (in hex format) or classID (full classID with ibc prefix) of the
   * denomination trace information.
   *
   * @generated from field: string hash = 1;
   */
  hash: string;

  constructor(data?: PartialMessage<QueryClassTraceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryClassTraceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassTraceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassTraceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassTraceRequest;

  static equals(a: QueryClassTraceRequest | PlainMessage<QueryClassTraceRequest> | undefined, b: QueryClassTraceRequest | PlainMessage<QueryClassTraceRequest> | undefined): boolean;
}

/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryClassTraceResponse
 */
export declare class QueryClassTraceResponse extends Message<QueryClassTraceResponse> {
  /**
   * class_trace returns the requested class trace information.
   *
   * @generated from field: ibc.applications.nft_transfer.v1.ClassTrace class_trace = 1;
   */
  classTrace?: ClassTrace;

  constructor(data?: PartialMessage<QueryClassTraceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryClassTraceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassTraceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassTraceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassTraceResponse;

  static equals(a: QueryClassTraceResponse | PlainMessage<QueryClassTraceResponse> | undefined, b: QueryClassTraceResponse | PlainMessage<QueryClassTraceResponse> | undefined): boolean;
}

/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryClassTracesRequest
 */
export declare class QueryClassTracesRequest extends Message<QueryClassTracesRequest> {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryClassTracesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryClassTracesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassTracesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassTracesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassTracesRequest;

  static equals(a: QueryClassTracesRequest | PlainMessage<QueryClassTracesRequest> | undefined, b: QueryClassTracesRequest | PlainMessage<QueryClassTracesRequest> | undefined): boolean;
}

/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryClassTracesResponse
 */
export declare class QueryClassTracesResponse extends Message<QueryClassTracesResponse> {
  /**
   * class_traces returns all class trace information.
   *
   * @generated from field: repeated ibc.applications.nft_transfer.v1.ClassTrace class_traces = 1;
   */
  classTraces: ClassTrace[];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryClassTracesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryClassTracesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassTracesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassTracesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassTracesResponse;

  static equals(a: QueryClassTracesResponse | PlainMessage<QueryClassTracesResponse> | undefined, b: QueryClassTracesResponse | PlainMessage<QueryClassTracesResponse> | undefined): boolean;
}

/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryClassHashRequest
 */
export declare class QueryClassHashRequest extends Message<QueryClassHashRequest> {
  /**
   * The class trace ([port_id]/[channel_id])+/[denom]
   *
   * @generated from field: string trace = 1;
   */
  trace: string;

  constructor(data?: PartialMessage<QueryClassHashRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryClassHashRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassHashRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassHashRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassHashRequest;

  static equals(a: QueryClassHashRequest | PlainMessage<QueryClassHashRequest> | undefined, b: QueryClassHashRequest | PlainMessage<QueryClassHashRequest> | undefined): boolean;
}

/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryClassHashResponse
 */
export declare class QueryClassHashResponse extends Message<QueryClassHashResponse> {
  /**
   * hash (in hex format) of the denomination trace information.
   *
   * @generated from field: string hash = 1;
   */
  hash: string;

  constructor(data?: PartialMessage<QueryClassHashResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryClassHashResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassHashResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassHashResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassHashResponse;

  static equals(a: QueryClassHashResponse | PlainMessage<QueryClassHashResponse> | undefined, b: QueryClassHashResponse | PlainMessage<QueryClassHashResponse> | undefined): boolean;
}

/**
 * QueryEscrowAddressRequest is the request type for the EscrowAddress RPC
 * method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest
 */
export declare class QueryEscrowAddressRequest extends Message<QueryEscrowAddressRequest> {
  /**
   * unique port identifier
   *
   * @generated from field: string port_id = 1;
   */
  portId: string;

  /**
   * unique channel identifier
   *
   * @generated from field: string channel_id = 2;
   */
  channelId: string;

  constructor(data?: PartialMessage<QueryEscrowAddressRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEscrowAddressRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEscrowAddressRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEscrowAddressRequest;

  static equals(a: QueryEscrowAddressRequest | PlainMessage<QueryEscrowAddressRequest> | undefined, b: QueryEscrowAddressRequest | PlainMessage<QueryEscrowAddressRequest> | undefined): boolean;
}

/**
 * QueryEscrowAddressResponse is the response type of the EscrowAddress RPC
 * method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse
 */
export declare class QueryEscrowAddressResponse extends Message<QueryEscrowAddressResponse> {
  /**
   * the escrow account address
   *
   * @generated from field: string escrow_address = 1;
   */
  escrowAddress: string;

  constructor(data?: PartialMessage<QueryEscrowAddressResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEscrowAddressResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEscrowAddressResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEscrowAddressResponse;

  static equals(a: QueryEscrowAddressResponse | PlainMessage<QueryEscrowAddressResponse> | undefined, b: QueryEscrowAddressResponse | PlainMessage<QueryEscrowAddressResponse> | undefined): boolean;
}

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryParamsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.nft_transfer.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: ibc.applications.nft_transfer.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.nft_transfer.v1.QueryParamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}

