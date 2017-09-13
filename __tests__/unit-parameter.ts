import { UnitParameter } from '../src';

import { Kill } from '../examples/unit-parameters';

const unitParameterInstance: UnitParameter = new Kill();

describe('UnitParameter type', () => {
  test('getters', () => {
    expect(unitParameterInstance.getName()).toBe('Kill');
    expect(unitParameterInstance.getDescription().length).toBeGreaterThan(0);
    expect(unitParameterInstance.getId()).toBe('kill');
    expect(unitParameterInstance.getWeight()).toBe(0.5);
    expect(unitParameterInstance.getWeight()).toBeGreaterThan(0);
    expect(unitParameterInstance.getWeight()).toBeLessThanOrEqual(1);
  });

  test('revenue calculation', async () => {
    expect.assertions(2);

    await expect(unitParameterInstance.getValue()).resolves.toBeDefined();
    await expect(unitParameterInstance.getValue()).resolves.not.toBeNaN();
  });
});
