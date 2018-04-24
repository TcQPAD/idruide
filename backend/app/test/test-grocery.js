const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

chai.use(chaiHttp);

const endPoint = '/grocery-lists';

it('should list ALL GroceryLists at ' + endPoint + ' GET', function(done) {
  chai.request(server)
    .get(endPoint + "/get")
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});

it('should add a new GroceryList to the database at ' + endPoint + ' POST', function(done) {
  chai.request(server)
    .post(endPoint + "/post")
    .send({
      groceryList:
        {
          _id: 0,
          name: 'My List',
          groceryListItems: []
        }
    })
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('success');
      res.body.success.should.be.a('string');
      done();
    });
});


it('should add a new GroceryList to the database at ' + endPoint + ' POST, and get this grocery list at ' + endPoint + ' GET', function(done) {
  chai.request(server)
    .post(endPoint + "/post")
    .send({
      groceryList:
        {
          _id: 1,
          name: 'My List',
          groceryListItems: []
        }
    })
    .end(function(err, res){
      chai.request(server)
        .get(endPoint + '/get-id')
        .query({_id: 1})
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.be.a('object');
          res.body.success.should.have.property('_id');
          res.body.success.should.have.property('name');
          res.body.success.should.have.property('groceryListItems');
          res.body.success._id.should.equal(1);
          res.body.success.name.should.equal('My List');
          res.body.success.groceryListItems.should.deep.equal([]);

          chai.request(server)
            .get(endPoint + '/get-id')
            .query({_id: 2})
            .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('error');
              res.body.error.should.be.a('string');
              done();
            });

          done();
        });
    });
});
