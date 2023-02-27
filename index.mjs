import * as nock from 'nock';

nock('http://example.com')
  .persist(true)
  .post('/echo', (body) => {
    return true;
  });
