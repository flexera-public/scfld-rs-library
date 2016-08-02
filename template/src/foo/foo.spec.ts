import {FooController} from './foo.component'

describe(FooController.name, () => {

  var controller : FooController

  beforeEach(angular.mock.module('<%= moduleName %>'))

  beforeEach(inject(($controller: ng.IControllerService) => {
    controller = <FooController>$controller(FooController.name)
  }))

  it ('should have a message that talks about SVG', () => {
    expect(controller.message).toContain('SVG')
  })

})
