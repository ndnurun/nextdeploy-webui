/**
 *  Groups mock on server side
 *
 *  @author Eric Fehr (ricofehr@nextdeploy.io, github: ricofehr)
 *  @class Group
 *  @namespace mock
 *  @module nextdeploy
 */
module.exports = function(app) {
  var express = require('express');
  var groupsRouter = express.Router();

  /**
   *  Mock groups list request
   *
   *  @method get:/
   */
  groupsRouter.get('/', function(req, res) {
    res.send({
      'groups':[
        {"id":1,"name":"Admin","access_level":50,"users":[1]},
        {"id":2,"name":"Project Lead","access_level":40,"users":[2,6]},
        {"id":3,"name":"Developer","access_level":30,"users":[3]},
        {"id":4,"name":"Project Manager","access_level":20,"users":[4]},
        {"id":5,"name":"Guest","access_level":10,"users":[5]}
      ]
    });
  });

  /**
   *  Mock show group request
   *
   *  @method get:/$id
   */
  groupsRouter.get('/:id', function(req, res) {
    res.send({
      'group':{
        id: req.params.id
      }
    });
  });

  app.use('/api/v1/groups', groupsRouter);
};
