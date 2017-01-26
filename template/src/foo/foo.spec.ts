import angular from 'angular';
import {Foo} from './foo.component';

describe(Foo.name, () => {

  let controller: Foo;

  beforeEach(angular.mock.module('<%= moduleName %>'));

  beforeEach(inject(['$controller', ($controller: ng.IControllerService) => {
    controller = <Foo>$controller(Foo.name);
  }]));

  it ('should have a message that talks about SVG', () => {
    expect(controller.message).toContain('SVG');
  });

});
