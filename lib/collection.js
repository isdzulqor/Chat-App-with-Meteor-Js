Messages = new Mongo.Collection('messages');
var Schemas = {};
Schemas.Messages = new SimpleSchema({
    text: {
        type: String
    },
    timestamp: {
        type: Number
    },
    username: {
        type: String
    },
    chatRoomId: {
        type: String,
        optional: true
    }
});
Messages.attachSchema(Schemas.Messages);

ChatRooms = new Mongo.Collection('chatRooms');
Schemas.ChatRooms = new SimpleSchema({
    name: {
        type: String
    },
    userId: {
        type: String
    },
    timestamp: {
        type: Number
    }
});
ChatRooms.attachSchema(Schemas.ChatRooms);
