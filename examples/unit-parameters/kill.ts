import { IUnitParameter, IUnitParameterConfig, UnitParameter } from '../../src';

export class Kill extends UnitParameter implements IUnitParameter {
  // noinspection TsLint
  private static readonly UNIT_PARAMETER_CONFIG: IUnitParameterConfig = {
    name: 'Kill',

    description:
      'Helps the team win by getting advantage when the number of kills increases',

    weight: 0.5,
  };

  constructor() {
    super(Kill.UNIT_PARAMETER_CONFIG);
  }

  public getValue(): Promise<number> {
    return Promise.resolve(Math.random() * Math.random() * 10);
  }
}
