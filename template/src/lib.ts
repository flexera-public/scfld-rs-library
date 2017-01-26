import Module from '@rightscale/ui-angular-decorators';

import '../build/<%=moduleName %>.images';
import '../build/<%=moduleName %>.templates';

let lib = new Module('<%= moduleName %>', ['<%= moduleName %>.templates', '<%= moduleName %>.images']);
export default lib;
