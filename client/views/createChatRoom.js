Template.createChatRoom.events({
    'click .exit':function (e) {
        e.preventDefault();
        Session.set('showCreateDialog', false);
    },
    'click .create':function (e, tmpl) {
        e.preventDefault();
        var name = tmpl.find('#name').value;
        addChatroom(name);
        tmpl.find('#name').value = '';
        Session.set('showCreateDialog', false);
    }
});

var addChatroom = function (name) {
    var id = ChatRooms.insert({
        userId: Meteor.user().username,
        name: name,
        timestamp: Date.now()
    });
    if(id==0){
        alert("insert error");
    }else{
        alert("insert success");
    }
};