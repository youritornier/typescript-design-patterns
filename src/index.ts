import { run as runAbstractFactory } from './abstract-factory/src/index';
import { run as runBuilder } from './builder/src/index';
import { run as runFactoryMethod } from './factory-method/src/index';
import { Menu } from './menu';
import { run as runPrototype } from './prototype/src/index';
import { run as runSingleton } from './singleton/src/index';

const selectPattern = (async () => {
  const menu = new Menu();
  do {
    const pattern: string = await menu.selectPattern();
    switch (pattern) {
      case 'AbstractFactory': runAbstractFactory(); break;
      case 'Builder': runBuilder(); break;
      case 'FactoryMethod': runFactoryMethod(); break;
      case 'Prototype': runPrototype(); break;
      case 'Singleton': runSingleton(); break;
      case 'Adapter': console.log('Not implemented yet'); break;
      case 'Bridge': console.log('Not implemented yet'); break;
      case 'Composite': console.log('Not implemented yet'); break;
      case 'Decorator': console.log('Not implemented yet'); break;
      case 'Facade': console.log('Not implemented yet'); break;
      case 'Flyweight': console.log('Not implemented yet'); break;
      case 'Proxy': console.log('Not implemented yet'); break;
      case 'ChainOfResponsibility': console.log('Not implemented yet'); break;
      case 'Command': console.log('Not implemented yet'); break;
      case 'Interpreter': console.log('Not implemented yet'); break;
      case 'Iterator': console.log('Not implemented yet'); break;
      case 'Mediator': console.log('Not implemented yet'); break;
      case 'Memento': console.log('Not implemented yet'); break;
      case 'Observer': console.log('Not implemented yet'); break;
      case 'State': console.log('Not implemented yet'); break;
      case 'Strategy': console.log('Not implemented yet'); break;
      case 'TemplateMethod': console.log('Not implemented yet'); break;
      case 'Visitor': console.log('Not implemented yet'); break;
      default: break;
    }
  } while (await menu.continue());
});
selectPattern();
