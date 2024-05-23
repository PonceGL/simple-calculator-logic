import { KeyboardKeys } from './interfaces';
import { System, system } from './system';

class CalculatorKeyboard {
  public system: System;

  constructor(system: System) {
    this.system = system;
  }

  public pressKey(key: KeyboardKeys): void {
    this.system.input(key);
  }
}

export const keyboard = new CalculatorKeyboard(system);
