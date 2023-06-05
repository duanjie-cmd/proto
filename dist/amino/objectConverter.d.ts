import { JsonWriteOptions, Message, AnyMessage } from '@bufbuild/protobuf';
type AnyJSON = any;
interface ProtobufObject {
    typeUrl: string;
    value: AnyJSON;
}
export declare const AminoJSONOptions: JsonWriteOptions;
export declare function convertProtoMessageToObject<T extends Message<T> = AnyMessage>(msg: Message<T>): ProtobufObject;
export declare function convertProtoValueToMessage<T extends Message<T> = AnyMessage>(protoValue: any, ProtoMessage: typeof Message<T>): Message<T>;
export declare function convertProtoValueToDefaultAmino<T extends Message<T> = AnyMessage>(protoValue: any, ProtoMessage: typeof Message<T>): AnyJSON;
export declare const snakeToCamelCase: (str: string) => string;
export declare function convertSnakeKeysToCamel(item: any): any;
export declare function convertAminoToProtoValue<T extends Message<T> = AnyMessage>(aminoValue: any, ProtoMessage: typeof Message<T>): AnyJSON;
export declare function createAminoConverter<T extends Message<T> = AnyMessage>(ProtoMessage: typeof Message<T>, aminoType: string, toAmino?: typeof convertProtoValueToDefaultAmino, fromAmino?: typeof convertAminoToProtoValue): {
    [x: string]: {
        aminoType: string;
        toAmino: (protoValue: any) => any;
        fromAmino: (aminoValue: any) => any;
    };
};
export {};
//# sourceMappingURL=objectConverter.d.ts.map