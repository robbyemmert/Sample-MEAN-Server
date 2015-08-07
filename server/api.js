var express = require('express');

var customerRoute = express.Router();

var allowedKeys = [
    '8sdf75g8sd7f5gsdf76g5s7dfg',
    'kjhk34535345kjh34534k5g344',
    '96923jkg234jk235g235k23j52'
]

var customers = [{
    id: "123",
    name: 'John Smith',
    city: 'Grand Rapids'
}, {
    id: "321",
    name: 'John Doe',
    city: 'Detroit'
}, {
    id: "513",
    name: 'Jane Doe',
    city: 'Lowell'
}]

var hasKey = function(req, res, next){
    if (req.headers.authorization) {
        for (var i in allowedKeys) {
            var key = allowedKeys[i];
            if (key === req.headers.authorization) {
                next()
                return;
            }
        }
        res.status(401).json({
            status: "unauthorized key",
            message: "Please provide a valid access key"
        })
    } else {
        res.status(401).json({
            status: "unauthenticated request",
            message: "You must provide a valid key to access this feature"
        })
    }
}

var findCustomerById = function(id){
    for (var i in customers) {
        var cust = customers[i];
        if (cust.id === id) {
            return cust;
        }
    }

    return false;
}

var removeCustomerById = function(id){
    for (var i in customers) {
        var cust = customers[i];
        if (cust.id === id) {
            customers.splice(i, 1);
            return cust;
        }
    }

    return false;
}

var updateCustomerById = function(id, newCust){
    for (var i in customers) {
        var cust = customers[i];
        if (cust.id === id) {
            newCust.id = cust.id;
            customers[i] = newCust
            return newCust;
        }
    }

    return false;
}

customerRoute.get('/customers', hasKey, function(req, res){
    res.status(200).json(customers);
});

customerRoute.get('/customer/:id', hasKey, function(req, res){
    var cust = findCustomerById(req.params.id);

    if (cust) {
        res.status(200).json(cust);
    } else {
        res.status(404).json({
            status: "content not found",
            message: "Customer not found"
        })
    }
});

customerRoute.post('/customer', hasKey, function(req, res){
    console.log(req.body);
    var cust = req.body;

    if (!cust || (typeof cust != "object")) {
        res.status(500).json({
            status: "invalid request",
            message: "The body of the request should be parseable JSON"
        })
        return;
    }

    customers.push(cust);
    res.status(201).json({
        status: "success",
        message: "1 customer added"
    })
});

customerRoute.post('/customer/:id', hasKey, function(req, res){
    if (!req.params.id) {
        res.status(500).json({
            status: "invalid request",
            message: "No id provided"
        })
        return;
    }
    var newCust = req.body;
    if (!newCust || (typeof newCust != "object")) {
        res.status(500).json({
            status: "invalid request",
            message: "The body of the request should be parseable JSON"
        })
        return;
    }
    var cust = updateCustomerById(req.params.id, newCust);

    if (!cust) {
        res.status(404).json({
            status: "content not found",
            message: "Customer not found"
        })
        return;
    } else {
        res.status(200).json({
            status: "success",
            message: "1 customer updated"
        })
    }
})

customerRoute.post('/customer/:id/delete', hasKey, function(req, res){
    if (!req.params.id) {
        res.status(500).json({
            status: "invalid request",
            message: "No id provided"
        })
        return;
    }
    var cust = removeCustomerById(req.params.id);

    if (!cust) {
        res.status(404).json({
            status: "content not found",
            message: "Customer not found"
        })
        return;
    } else {
        res.status(200).json({
            status: "success",
            message: "1 customer was deleted"
        });
    }

})

module.exports = customerRoute;
