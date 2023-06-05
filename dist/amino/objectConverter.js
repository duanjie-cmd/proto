export const AminoJSONOptions = {
    emitDefaultValues: true,
    enumAsInteger: true,
    useProtoFieldName: true,
};
export function convertProtoMessageToObject(msg) {
    return {
        typeUrl: `/${msg.getType().typeName}`,
        value: msg.toJson(),
    };
}
export function convertProtoValueToMessage(protoValue, ProtoMessage) {
    return new ProtoMessage().fromJson(protoValue);
}
export function convertProtoValueToDefaultAmino(protoValue, ProtoMessage) {
    const protoMessage = convertProtoValueToMessage(protoValue, ProtoMessage);
    return protoMessage.toJson(AminoJSONOptions);
}
export const snakeToCamelCase = (str) => str.replace(/_[a-zA-Z]/g, (substr) => substr[1].toUpperCase());
export function convertSnakeKeysToCamel(item) {
    if (typeof item !== 'object') {
        return item;
    }
    if (Array.isArray(item)) {
        const arrayWithCamel = [];
        item.forEach((el) => {
            arrayWithCamel.push(convertSnakeKeysToCamel(el));
        });
        return arrayWithCamel;
    }
    const objectWithCamel = {};
    Object.keys(item).forEach((key) => {
        objectWithCamel[snakeToCamelCase(key)] = convertSnakeKeysToCamel(item[key]);
    });
    return objectWithCamel;
}
export function convertAminoToProtoValue(aminoValue, ProtoMessage) {
    const protoValue = convertSnakeKeysToCamel(aminoValue);
    const protoMessage = convertProtoValueToMessage(protoValue, ProtoMessage);
    return protoMessage.toJson();
}
export function createAminoConverter(ProtoMessage, aminoType, toAmino = convertProtoValueToDefaultAmino, fromAmino = convertAminoToProtoValue) {
    const protoTypeUrl = `/${new ProtoMessage().getType().typeName}`;
    function convertToAmino(protoValue) {
        return toAmino(protoValue, ProtoMessage);
    }
    function convertFromAmino(aminoValue) {
        return fromAmino(aminoValue, ProtoMessage);
    }
    return {
        [protoTypeUrl]: {
            aminoType,
            toAmino: convertToAmino,
            fromAmino: convertFromAmino,
        },
    };
}
//# sourceMappingURL=objectConverter.js.map