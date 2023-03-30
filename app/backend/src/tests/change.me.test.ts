import Sinon, * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

import { Model } from 'sequelize';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  afterEach(() => {
    Sinon.restore();
  })

  it('deve fazer um findall na tebela de teams', async () => {
    const mock = [
      {
        id: 1,
        teamName: "Avaí/Kindermann"
      },
    ]

    Sinon.stub(Model, 'findAll').resolves(mock as Team[]);
  })
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
});
