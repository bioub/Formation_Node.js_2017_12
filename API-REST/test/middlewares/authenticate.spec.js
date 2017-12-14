const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const authenticate = require('../../middlewares/authenticate');
const expect = chai.expect;

describe('middleware authenticate', () => {
  it('should call res.json', () => {
    const req = {
      headers: {}
    };
    const res = {
      json(obj) {
        expect(obj.msg).to.be.equals('Unauthorized');
      }
    };
    authenticate(req, res);
    expect(res.statusCode).to.equals(401);
  });
  it('should call next()', () => {
    const req = {
      headers: {
        authorization: '123'
      }
    };
    const res = {};
    const next = sinon.spy();
    authenticate(req, res, next);
    expect(next).to.have.been.calledOnce;
  });
});
