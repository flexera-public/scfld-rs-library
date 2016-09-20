import lib from '../lib';

/**
 * Sample controller exposing a message to the view.
 *
 * This comment is supported by tools like VS Code to show help in
 * the autocomplete popup.
 */
@lib.component({ templateUrl: '<%= moduleName %>/foo/foo.html' })
export class Foo {

  message: string;

  constructor() {
    this.message = `Below is a SVG image coming from Angular's cache.`;
  }
}
