const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
chai.should();

const hello = (prenom = 'Inconnu') => `Bonjour ${prenom}`;

describe('hello function', () => {
  it('should return Bonjour Inconnu with no param', () => {
    assert.strictEqual(hello(), 'Bonjour Inconnu');
    expect(hello()).to.equals('Bonjour Inconnu');
    hello().should.be.equal('Bonjour Inconnu');
  });
  it('should return Bonjour Romain with param Romain', () => {
    assert.strictEqual(hello('Romain'), 'Bonjour Romain');
  });
});
