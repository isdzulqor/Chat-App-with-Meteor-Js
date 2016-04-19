/**
 * Created by isdzulqor on 17/04/16.
 */
Template.home.events({
    'click #logout':function (e) {
        e.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
    'click #createChatRoom':function (e) {
        e.preventDefault();
        Session.set('showCreateDialog', true);
    },
    'click #listChatRoom':function (e) {
        e.preventDefault();
        Session.set('showListDialog', true);
    },
    'click .add-chat':function (e, tmpl) {
        e.preventDefault();
        var text = tmpl.find('#text-msg').value;
        addChat(text);
        var objDiv = document.getElementById("always-scoll");
        objDiv.scrollTop = objDiv.scrollHeight;
        tmpl.find('#text-msg').value = '';
    },
    'click .delete':function (e, tmpl) {
        e.preventDefault();
        deleteChat(this._id);
    }
});

Template.home.helpers({
    tolayout:function () {
        Router.go('/');
    },
    showCreateDialog:function () {
        return Session.get('showCreateDialog');
    },
    showListDialog:function () {
        return Session.get('showListDialog');
    },
    chat:function () {
        return Messages.find({
            chatRoomId: { $exists : false }
        }, { sort: { timestamp: 1 }});
    },
    formatDate: function(timestamp) {
        var date = new Date(timestamp);
        return date.toLocaleString();
    },
    canDelete:function (username) {
        if(username == Meteor.user().username)
            return true;
        else
            return false;
    }
});


var addChat = function (text) {
    var id = Messages.insert({
        username: Meteor.user().username,
        text: text,
        timestamp: Date.now()
    });
    if(id==0){
        alert("insert error");
    }
};

var deleteChat = function (_id) {
    Messages.remove(_id);
};

Template.home.onRendered(function () {
    var objDiv = document.getElementById("always-scoll");
    objDiv.scrollTop = objDiv.scrollHeight;
});


