import * as nock from 'nock';
import * as config from 'config';

describe('nock test', () => {
  it('should work', () => {
    nock('http://example.com')
      .persist(true)
      .post('/echo', (body) => {
        expect(body).toEqual('echo');
        return true;
      });
    expect(config.test.dbConfig.host).toStrictEqual('localhost')
    expect(1).toStrictEqual(1);
  })
})
