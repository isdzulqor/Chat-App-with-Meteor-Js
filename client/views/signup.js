/**
 * Created by isdzulqor on 17/04/16.
 */
Template.signup.events({
    'submit form': function(e, tmpl){
        e.preventDefault();
        var emailVar = tmpl.find('#form-email').value;
        var usernameVar = tmpl.find('#form-username').value;
        var passwordVar = tmpl.find('#form-password').value;
        var confPasswordVar = tmpl.find('#form-conf-password').value;
        if(passwordVar != confPasswordVar || emailVar == 0 ||
            usernameVar == 0 || passwordVar == 0 || confPasswordVar == 0) {
            console.log("email : "+emailVar+"\nusername : "+usernameVar+"\npassword : "+passwordVar);
            window.alert("Isikan data dengan benar");
        }
        Accounts.createUser({
            email: emailVar,
            username: usernameVar,
            password: passwordVar
        }, function (err) {
            if(err){
                window.alert("Error \n"+err);
                console.log(err);
            }
            else{
                console.log("success");
                window.alert("Sukses");
                Router.go('/home');
            }
        });
    }
});