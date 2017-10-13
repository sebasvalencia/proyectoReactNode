let supertest = require('supertest');
let chai = require('chai');
let should = chai.should();

var server = supertest.agent('http://localhost:3001');

describe('Prueba del metodo GET todas las personas', ()=>{
    it('Debería retornar un array con datos', (done)=>{
        server.get('/persona').expect(200)
        .end((err, res) => {
            console.log("res: ", res);
            res.status.should.equal(200);
            res.body.should.be.a('array');
        });
    });
});




