const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

chai.use(chaiHttp);

const endPointList = '/grocery-lists';
const endPoint = '/grocery-list-items';

it('should add a new GroceryList to the database at ' + endPointList + ' POST, and POST a new item into this list' + endPoint + ' GET and then DELETE it', function(done) {
  chai.request(server)
    .post(endPointList + "/post")
    .send({
      groceryList:
        {
          _id: 3,
          name: 'My List',
          groceryListItems: []
        }
    })
    .end(function (err, res) {
      chai.request(server)
        .post(endPoint + '/post')
        .send({parent: 3, groceryListItem: {_id: 0, name: 'New Item'}})
        .end(function (err, res) {
          if (err)
            done(err);

          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.be.a('string');
          done();
        });
    });
});

it('should add a new GroceryList to the database at ' + endPointList + ' POST, and POST a new item into this list' + endPoint + ' GET and then DELETE it', function(done) {
  chai.request(server)
    .post(endPointList + "/post")
    .send({
      groceryList:
        {
          _id: 4,
          name: 'My List',
          groceryListItems: [{_id: 0, name: 'New item'}]
        }
    })
    .end(function (err, res) {
      if (err)
        done(err);

      chai.request(server)
        .delete(endPoint + '/delete')
        .send({parent: 4, _id: 0})
        .end(function (err, res) {
          if (err)
            done(err);

          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.be.a('string');
          done();
        });
    });
});

// todo test remove procedures
