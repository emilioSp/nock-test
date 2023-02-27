import * as nock from 'nock';
import { describe, expect, it } from "vitest";

describe('nock test', () => {
  it('should work', () => {
    nock('http://example.com')
      .persist(true)
      .post('/echo', (body) => {
        expect(body).toEqual('echo');
        return true;
      });
    expect(1).toStrictEqual(1);
  })
})
