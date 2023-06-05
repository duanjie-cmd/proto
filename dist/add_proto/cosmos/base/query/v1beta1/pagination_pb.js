// @generated by protoc-gen-es v1.2.1
// @generated from file cosmos/base/query/v1beta1/pagination.proto (package cosmos.base.query.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 *
 * @generated from message cosmos.base.query.v1beta1.PageRequest
 */
export const PageRequest = proto3.makeMessageType(
  "cosmos.base.query.v1beta1.PageRequest",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "count_total", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 *
 * @generated from message cosmos.base.query.v1beta1.PageResponse
 */
export const PageResponse = proto3.makeMessageType(
  "cosmos.base.query.v1beta1.PageResponse",
  () => [
    { no: 1, name: "next_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);
