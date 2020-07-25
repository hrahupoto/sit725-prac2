const express = require('express');
const { isString } = require('util');
const app = express()
var result = 0, num1 = 0, num2 = 0, user = '', string = 'User not found';


app.use(express.static(__dirname + '/public'))

// //basic end point
// app.get('/', function (req, res) {
//     console.log("I have been hit");
//   res.send('Hello World')
// })
 
app.get('/test', function(request, response){
    console.log('Test has been hit');
    response.send('Test page')
})

let addition = function(num1, num2){
    result = num1+num2;
    return result
}

app.get('/add_operator', function(request, response){
    num1 = parseInt(request.query.num1);
    num2 = parseInt(request.query.num2);
    console.log(num1); 
    console.log(num2); 
    let sum = addition(num1,num2);
    response.send('The sum is '+ sum)     
})

let accounts = [
    {id:1, name: 'alex', deposit: 5},
    {id:2, name: 'sarah', deposit: 5},
    {id:3, name: 'jim', deposit: 15}
] 

//Filter's user account by name
app.get('/user_account', function(request,response){
    user = request.query.user;
    let data = accounts.filter(function(account){
        if(account.name === user){
            return account.name;
        }
        
    });

    console.log(JSON.stringify(data));
    response.send('The user details are '+ JSON.stringify(data))
})

//start server and listen on port 3000
app.listen(3000)