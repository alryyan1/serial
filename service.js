// var Service = require('node-windows').Service;
import NodeService from 'node-windows'
var Service = NodeService.Service
// Create a new service object
var svc = new Service({
  name:'sysmex kx 21 lis',
  description: 'the service for making lis connection with sysmex kx21',
  script: 'C:\\Users\\hp\\Desktop\\serial\\reader.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();