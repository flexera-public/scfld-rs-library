var build = require('@rightscale/ui-build-tools');

build.init({
  bundles: [{
    name: '<%=moduleName %>',
    root: 'src',
    dist: true,
    library: true
  },
  {
    name: 'demo',
    root: 'demo',
    dependencies: ['<%=moduleName %>']
  }],
  run: {
    bundle: 'demo'
  }
});
