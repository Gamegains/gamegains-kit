import { AuthCode, AuthResult, Game, GameUnit, UnitParameter } from '../src/';

test('Should have AuthCode type available', () => {
  expect(AuthCode).toBeTruthy();
});

test('Should have AuthResult type available', () => {
  expect(AuthResult).toBeTruthy();
});

test('Should have Game type available', () => {
  expect(Game).toBeTruthy();
});

test('Should have GameUnit type available', () => {
  expect(GameUnit).toBeTruthy();
});

test('Should have UnitParameter type available', () => {
  expect(UnitParameter).toBeTruthy();
});
