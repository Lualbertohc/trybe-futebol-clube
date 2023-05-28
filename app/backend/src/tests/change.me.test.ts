// import Sinon, * as sinon from 'sinon';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';
// import Match from '../database/models/Match';

chai.use(chaiHttp);

const { expect } = chai;

  describe('Teste na rota matches', () => {

    let chaiHttpResponse: Response;
  
    beforeEach(() => { sinon.restore() })
  
    it('getAll nas partidas', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches')
      expect(chaiHttpResponse.status).to.be.deep.equal(200);
    });
  
    it('testa o progresso', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true')
      expect(chaiHttpResponse.status).to.be.deep.equal(200);
    });
  });
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
