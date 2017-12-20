window.addEventListener('load', async event => {
  const config = await fetchConfig();
  const myself = await fetchApi(config, 'GET', '/rest/api/2/myself')


});

async function logError(error) {
  console.groupCollapsed(error.message);
  console.log(error.stack);
  console.groupEnd();
}

async function fetchConfig() {
  try {
    const response = await fetch('config.json');
    return await response.json();
  } catch (e) {
    logError(e);
    return null;
  }
}

async function fetchApi(config, method, endpoint) {
  try {
    const headers = { Authorization: `Basic ${window.btoa(config.userName + ':' + config.passphrase)}` };
    const response = await fetch(config.hostName + endpoint, { method, headers });
    return await response.json();
  } catch (e) {
    logError(e);
    return null;
  }
}
