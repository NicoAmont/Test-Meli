const request = require('supertest');
const app = require('../../src/index');


describe('Magneto API', () => {
    const dna = ['AAGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
    it('POST / should return the isMutant true', (done) => {
      request(app)
        .post('/api/mutant')
        .send({dna})
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).not.toBeNull();
          expect(res.body).not.toBeUndefined();
          done();
        });
    });

    it('POST / should return 403 Forbidden', (done) => {
        const dnaWrong = ['GTGCGA', 'CGGTGC', 'TTATGT', 'AGATTG', 'CTCCTA', 'TCACTA']
        request(app)
          .post('/api/mutant')
          .send({dna: dnaWrong})
          .expect('Content-type', /json/)
          .expect(403)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });
      
      it('POST / should return the isMutant true', (done) => {
        const dnaWrong = []
        request(app)
          .post('/api/mutant')
          .send({dna: dnaWrong})
          .expect('Content-type', /json/)
          .expect(403)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

      it('GET / should return stats of mutants', (done) => {
        request(app)
          .get('/api/stats')
          .expect('Content-type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).toHaveProperty('count_mutant_dna');
            expect(res.body).toHaveProperty('count_human_dna');
            expect(res.body).toHaveProperty('ratio');
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });
});