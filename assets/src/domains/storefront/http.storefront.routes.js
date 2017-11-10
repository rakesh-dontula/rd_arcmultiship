
module.exports = function (context, callback) {


  var body = context.request.body;
  if (!body){
    context.response.body = 'null';
    return callback();
  }
  console.log (body);
  context.response.body = 'hey'+ 
  '<br>'+
  body.color;
  return callback();
  // var customerId = 1001 || context.request.query.customerId;
  // var userName = context.request.query.userName;
  // if ( context.request.query.logOut ){
  //   context.exec.logOut();
  //   context.response.redirect('/?loggedOut');
  //   context.response.end();
  //   return;
  // }
  // if ( userName ){
  //   customerId = null;
  // }

  // context.exec.loginUser({ customerId: customerId, userName: userName}, function (err, result) {
  //   if (err) {
  //     return callback(err);
  //   }
  //   context.response.redirect('/?loggedIn');
  //   context.response.end();
  // });
};