import { AuthCode } from '../src';

const code = '3041459541';

const expirationDate = new Date();
expirationDate.setFullYear(2000);

const authCode = new AuthCode(code, expirationDate);

describe('AuthCode type', () => {
  test('getters', () => {
    expect(authCode.getCode()).toBe(code);
    expect(authCode.getExpiration().getFullYear()).toBeLessThan(new Date().getFullYear());
  });

  test('expiration check', () => {
    expect(authCode.hasExpired()).toBe(true);
  });
});
