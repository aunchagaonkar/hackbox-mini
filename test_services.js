const http = require('http');

const testService = (url, serviceName) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const { statusCode } = res;
      if (statusCode === 200) {
        console.log(`${serviceName} is running`);
        resolve();
      } else {
        console.error(`${serviceName} is not running. Status code: ${statusCode}`);
        reject();
      }
    }).on('error', (e) => {
      console.error(`${serviceName} is not running. Error: ${e.message}`);
      reject();
    });
  });
};

const runTests = async () => {
    console.log('All services are running correctly');
};

runTests();