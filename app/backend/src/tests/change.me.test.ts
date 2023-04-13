// import Sinon, * as sinon from 'sinon';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';
// import Match from '../database/models/Match';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste na rota teams', () => {

    let chaiHttpResponse: Response;
  
    beforeEach(async () => {
      sinon.stub(Team, 'findOne').resolves({ 
          id: 10,
          teamName: "Minas Brasília"
      } as Team);
    });
  
    afterEach(() => {
      (Team.findOne as sinon.SinonStub).restore();
    })
  
    it('get teams', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams')
      expect(chaiHttpResponse.status).to.be.deep.equal(200);
    });
  
    it('get by id teams', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams/10')
      expect(chaiHttpResponse.status).to.be.deep.equal(200);
    });
  });

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
