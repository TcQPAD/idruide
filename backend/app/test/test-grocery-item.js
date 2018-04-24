const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

chai.use(chaiHttp);

const endPointList = '/grocery-lists';
const endPoint = '/grocery-list-items';

it('should add a new GroceryList to the database at ' + endPointList + ' POST, and POST a new item into this list' + endPoint + ' GET', function(done) {
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
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.be.a('string');
          done();
        });

    });
});
