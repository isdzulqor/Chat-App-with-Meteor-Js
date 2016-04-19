/**
 * Created by isdzulqor on 17/04/16.
 */
Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', {
    name: 'layout'
});
Router.route('/signup', {
    name: 'signup'
});
Router.route('/home', {
    name: 'home'
});

Router.route('/chatroom/:_id/name/:chatroom_name', {
    name: 'chatroom',
    data: function() {
        return {
            chatroomName: this.params.chatroom_name,
            chat: Messages.find({
                chatRoomId: this.params._id
            },
                { sort:
                { timestamp: 1 }}
            )
        };
    }
});