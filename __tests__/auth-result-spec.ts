import {AuthResult, AuthStatus} from "../src";


describe('AuthResult type', () => {
  test('getters', () => {
    const authResult = new AuthResult(AuthStatus.SUCCESS);
    expect(authResult.getStatus()).toBe(AuthStatus.SUCCESS);
    expect(authResult.getMessage()).toBeUndefined();
  });

  test('static methods', () => {
    expect(AuthResult.METHOD_NOT_IMPLEMENTED).rejects.toHaveProperty('status').then();
    expect(AuthResult.METHOD_NOT_IMPLEMENTED).rejects.toHaveProperty('message');
  });
});
