import { KeyboardKeys, ObserverFunction } from './interfaces';
import { System, system } from './system';

class CalculatorClass {
  private system: System;

  constructor(system: System) {
    this.system = system;
  }

  public setObserver(func: ObserverFunction) {
    this.system.setObserver(func);
  }

  public pressKey(key: KeyboardKeys): void {
    this.system.input(key);
  }
}

export const Calculator = new CalculatorClass(system);
