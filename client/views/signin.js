/**
 * Created by isdzulqor on 17/04/16.
 */
Template.signin.events({
    'submit form':function (e, tmpl) {
        e.preventDefault();
        var usernameVar = tmpl.find('#form-username').value;
        var passwordVar = tmpl.find('#form-password').value;
        Meteor.loginWithPassword(usernameVar, passwordVar, function (e) {
            if(e){
                alert("Login Error \n" + e);
            }else{
                Router.go('/');
            }
        });
    }
});




