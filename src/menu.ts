import { prompt } from 'prompts';

export class Menu {
  private patterns = {
    creational: [
      { title: 'Abstract Factory', value: 'AbstractFactory' },
      { title: 'Builder', value: 'Builder' },
      { title: 'Factory Method', value: 'FactoryMethod' },
      { title: 'Prototype', value: 'Prototype' },
      { title: 'Singleton', value: 'Singleton' },
    ],
    structural: [
      { title: 'Adapter', value: 'Adapter' },
      { title: 'Bridge', value: 'Bridge' },
      { title: 'Composite', value: 'Composite' },
      { title: 'Decorator', value: 'Decorator' },
      { title: 'Facade', value: 'Facade' },
      { title: 'Flyweight', value: 'Flyweight' },
      { title: 'Proxy', value: 'Proxy' },
    ],
    behavioral: [
      { title: 'Chain of Responsibility', value: 'ChainOfResponsibility' },
      { title: 'Command', value: 'Command' },
      { title: 'Interpreter', value: 'Interpreter' },
      { title: 'Iterator', value: 'Iterator' },
      { title: 'Mediator', value: 'Mediator' },
      { title: 'Memento', value: 'Memento' },
      { title: 'Observer', value: 'Observer' },
      { title: 'State', value: 'State' },
      { title: 'Strategy', value: 'Strategy' },
      { title: 'Template Method', value: 'TemplateMethod' },
      { title: 'Visitor', value: 'Visitor' },
    ],
  };

  private selectPatternQuestion = {
    type: 'select',
    name: 'pattern',
    message: 'Choose a design pattern',
    choices: new Array<any>(),
  };

  private selectedTypeQuestion = {
    type: 'select',
    name: 'type',
    message: 'Choose a design pattern type',
    choices: [
      { title: 'All patterns' },
      { title: 'Creational patterns' },
      { title: 'Structural patterns' },
      { title: 'Behavioral patterns' },
    ],
  };

  constructor() { }

  public async selectPattern(): Promise<string> {
    this.selectPatternQuestion.choices = new Array<any>();
    const selectedType: any = await prompt(this.selectedTypeQuestion);
    switch (selectedType.type) {
      case 1:
        this.selectPatternQuestion.choices.push(...this.patterns.creational);
        break;
      case 2:
        this.selectPatternQuestion.choices.push(...this.patterns.structural);
        break;
      case 3:
        this.selectPatternQuestion.choices.push(...this.patterns.behavioral);
        break;
      default:
        this.selectPatternQuestion.choices.push(...this.patterns.creational);
        this.selectPatternQuestion.choices.push(...this.patterns.structural);
        this.selectPatternQuestion.choices.push(...this.patterns.behavioral);
        break;
    }
    const selectedPattern: any = await prompt(this.selectPatternQuestion);

    return selectedPattern.pattern;
  }

  public async continue(): Promise<boolean> {
    const continueResponse: any = await prompt({
      type: 'confirm',
      name: 'value',
      message: 'Do you want to continue?',
      initial: true,
    });
    return continueResponse.value;
  }
}
