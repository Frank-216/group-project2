var bcrypt = require('bcrypt');
// var products = db.ITEMS;
// var users = db.user;
// var Images = db.Images;

module.exports = function(app) {
  app.post('/api/signup', function(req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    //creating a user from the email and password provided
    db.user.create({
      user_name: req.body.username,
      email: req.body.email,
      password: hash,
      street_name: req.body.address,
      zip:req.body.zip
      //sending the newly created user to the client
    }).then(function(dbUser) {
      // res.json(dbUser.dataValues);
      console.log("path working")
      res.redirect("/");
      //if there are any errors creating our user, we will gracefully catch the error send the error to the client instead of throwing it (which would crash our server)
    }).catch(function(err) {
      res.json({message: err.message});
    });
  });

// check that a user is signing in correctly.  then redirect to products page 
  app.post('/api/signin', function(req, res) {
  //looking for one user whos password has the email and password submitted
  console.log(req.body.email);
  db.user.findOne({
    where: {
      user_name: req.body.username
    }
  }).then(function(dbUser) {
    //if no user is found, we'll send back a message saying so
    console.log(dbUser);
    if (!dbUser) {
      res.json({
        message: "User not found"
      });

    } else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
      //otherwise we'll send back the user
      console.log("path working");
      res.redirect("/");
    } else {
      //if the password is invalid, we'll let the user know
      res.render("")
      res.json({
        message: "Invalid Password"
      });
    }
    //we gracefully handle any errors with our catch
  }).catch(function(err) {
    res.json(err);
  });
});

};
