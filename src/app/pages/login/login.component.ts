import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '309986649791355',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


  }

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          debugger
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            //login success
            //login success code here
            //redirect to home page
            /* make the API call */
            debugger
            FB.api(
              response.authResponse.userID,
              {fields: 'id,name,email'},
              function (responseI) {
                if (responseI && !responseI.error) {
                  /* handle the result */
                  console.log(responseI)
                }
              }
            );
           }
           else
           {
           console.log('User login failed');
         }
      });

  }

}
