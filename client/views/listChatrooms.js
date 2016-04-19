Template.listChatrooms.events({
    'click .exit':function (e) {
        e.preventDefault();
        Session.set('showListDialog', false);
    }
});

Template.listChatrooms.helpers({
    chatrooms:function () {
        return ChatRooms.find({}, { sort: { timestamp: -1 }});
    }
});