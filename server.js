const express = require('express')
const app = express()
var result = 0, num1 = 0, num2 = 0;


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
    let sum = addition(5,6);
    response.send('The sum is '+ sum)     
})



//start server and listen on port 3000
app.listen(3000)