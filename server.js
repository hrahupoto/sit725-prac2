const express = require('express');
const { isString, isNull } = require('util');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const { copyFile } = require('fs');
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

//Filter's user account by id and name (complete)
app.get('/user_account', function(request,response){
    user_id = request.query.user_id;
    user = request.query.user;
    let data = accounts.filter(function(account){
        if(account.id == user_id && account.name == user){
            return account.id;
        }
       
    });

    console.log(JSON.stringify(data));
    response.send('The user details are '+ JSON.stringify(data))
})

//single node class
class Node{
    constructor(element){
        this.element=element;
        this.next = null;
    }
}

//linkedlist class with methods
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //adding elements by new node each time 
    //and iterate through using next
    add(element){
        var node = new Node(element);

        var current_node;

        if (this.head == null){
            this.head = node;
        }else{
            current_node = this.head;
            while(current_node.next)//if undefined return false
            {
                current_node = current_node.next;
            }
            current_node.next = node;
        }
        this.size++
    }

    //print the list using next to iterate
    printlist(user_id,user){
        var current_node = this.head;
        var complete = [];
        var i = 0;

        while(current_node){
            complete[i]= current_node.element;
            current_node = current_node.next;
            i++;
        }
        //console.log(complete);

        let data = complete.filter(function(account){
            if(account.id == user_id && account.name == user){
                return account.id;
            }
           
            });
            return data;
    }
}

app.get('/user_account_ll', function(request,response){
    const ll = new LinkedList();
    
    ll.add(accounts[0]);
    ll.add(accounts[1]);
    ll.add(accounts[2]);

    user_id = request.query.user_id;
    user = request.query.user;

    console.log(ll.printlist(user_id,user));
    response.send('The user details according to linked list are: '+ JSON.stringify(ll.printlist(user_id,user)))
})

//start server and listen on port 3000
app.listen(3000)