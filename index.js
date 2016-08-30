'use strict';

var express = require('express');
var http = require('http');
var open = require('open');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan'); // formerly express.logger
var errorhandler = require('errorhandler');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Account = require('./app/models/account');
var router = express.Router();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config/config'); // get our config file
var User = require('./app/models/user'); // get our mongoose model
var app = express();

mongoose.connect(config.database);
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function (req, res) {

  console.log('Trying to authenticate: ', req.body);

  // find the user
  Account.find({
    email: req.body.email,
    password: req.body.password
  }, function (err, account) {

    console.log('THIS IS THE RESPONSE FROM LOGIN: ', err, account);

    if (err) {

      res.send(err);

    } else {

      if (account.length > 0) {


        console.log('AN ACCOUNT WAS FOUND!', account);
        console.log('We found an account!', account[0].password, req.body.password);
        // check if password matches
        if (account[0].password != req.body.password) {

          res.json({success: false, message: 'Authentication failed. Wrong password.'});

        } else {

          // if user is found and password is right
          // create a token
          console.log('*****ACCOUNT', account);

          var token = jwt.sign({password: account[0].password}, app.get('superSecret'), {
            expiresIn: 9999 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
            user: account
          });
        }

      } else {

        //error handler for no account found
        res.json({success: false, message: 'No account was found matching the information that you provided.'});

      }
    }

  });
});////////

////TOKEN AUTH////////////////////////////////////////////////////
// route middleware to verify a token, dont need this for things like create account etc..
router.use(function (req, res, next) {
  console.log('Trying to hit url!', req.url);
  var publicUrls = ['/accounts', '/reports'];
  if (publicUrls.indexOf(req.url.split("/") > -1)) {

    //this is a public url
    next();

  } else {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log('Route', token);
    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function (err, decoded) {
        if (err) {
          return res.json({success: false, message: 'Failed to authenticate token.'});
        } else {
          // if everything is good, save to request for use in other routes
          console.log('Your token is valid!');
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  }
});
///////////////////////////////////////////////////////////////



router.route('/accounts')

  // get all the accounts (accessed at GET http://localhost:8080/api/accounts)
  .get(function (req, res) {
    Account.find(function (err, accounts) {
      if (err) {
        res.send(err);
      }else {

        var profiles = [];

        accounts.map(function (x) {

          if(typeof x.familyName != 'undefined') profiles.push(x);

        });

        accounts.map(function (x) {

          if(typeof x.familyName == 'undefined') profiles.push(x);

        });

        res.json(profiles);
      }


    });
  })
  // create a account (accessed at POST http://localhost:8080/api/accounts)
  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {
    console.log('Create New Account: ', req.body);
    var account = new Account();      // create a new instance of the Bear model
    console.log(account);
    account.firstName = req.body.firstName;
    account.lastName = req.body.lastName;
    account.email = req.body.email;
    account.username = req.body.username;
    account.password = req.body.password;
    account.assessment = req.body.assessment;



    // save the bear and check for errors
    account.save(function (err) {
      if (err)
        res.send(err);

      res.json({message: 'Account created!', account: account});
      res.end();
    });


  });//end accounts


// on routes that end in /accounts/:account_id
// ----------------------------------------------------
router.route('/accounts/:account_id')

  // get the account with that id (accessed at GET http://localhost:8080/api/accounts/:account_id)
  .get(function (req, res) {
    console.log('ATTEMPTING TO FIND BY ID!', req);
    Account.findById(req.params.account_id, function (err, account) {
      if (err)
        return res.send(err);
      res.json(account).end;
    });
  })

  // update the account with this id (accessed at PUT http://localhost:8080/api/accounts/:account_id)
  .put(function (req, res) {
    console.log('Attempting Put', req.body);
    // use our account model to find the account we want
    Account.findById(req.params.account_id, function (err, account) {

      if (err)
        return res.send(err);

      account.firstName = req.body.firstName;
      account.lastName = req.body.lastName;
      account.email = req.body.email;
      account.username = req.body.username;
      account.password = req.body.password;
      account.date = req.body.date;
      account.familyName = req.body.familyName || "";
      account.address1 = req.body.address1 || "";
      account.address2 = req.body.address2 || "";
      account.city = req.body.city || "";
      account.state = req.body.state || "";
      account.zip = req.body.zip || "";
      account.phone = req.body.phone || "";
      account.activities = req.body.activities || "";


      // save the account
      account.save(function (err, account) {
        if (err)
          return res.send(err);

        res.json({message: 'Account updated!', account: account}).end;

      });

    });
  })

  // delete the account with this id (accessed at DELETE http://localhost:8080/api/accounts/:account_id)
  .delete(function (req, res) {
    Account.remove({
      _id: req.params.account_id
    }, function (err, account) {
      if (err)
        return res.send(err);

      res.json({message: 'Successfully deleted'}).end;
    });
  });




router.route('/checkdups/:email')

// get all the accounts (accessed at GET http://localhost:8080/api/accounts)
    .get( function (req, res) {

      console.log('CHECKING FOR DUPS!', req.params.email);

      Account.find({ email: req.params.email },function (err, accounts) {
        if (err) {
          res.send(err);
        }else {

          var profiles = [];

          // accounts.map(function (x) {
          //
          //   if(typeof x.familyName != 'undefined') profiles.push(x);
          //
          // });

          res.json(accounts.length);
        }


      });
    });


router.route('/files')

.get(function(req, res){
  var myfiles = [];
  fs.readdir('./app/docs', function (err, files) { if (err) throw err;
    files.forEach( function (file) {
      myfiles.push(file);
    });
    console.log('The files: ', myfiles);
    res.json({message: 'success', files: myfiles}).end;
  });





});


/**SERVER*************************************/
// all environments
app.set('port', process.env.PORT || 3004);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// express/connect middleware
app.use(morgan('dev'));


// serve up static assets
app.use(express.static(path.join(__dirname, '')));
app.use('/api', router);
var a = ['*', '!/api'];
//all get requests resolve to index.
app.get(a, function (req, res) {
  res.sendFile('index.html', {root: __dirname});
});

// development only
if ('development' === app.get('env')) {
  app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function () {
  open("http://localhost:" + app.get('port'));
  console.log('myApp server listening on port ' + app.get('port'));
});
/**END SERVER*************************************/








