window.addEventListener('load', async event => {
  const configResponse = await fetch('config.json');
  const config = await configResponse.json();
  const myself = await fetchJiraApi(config, 'GET', '/rest/api/2/myself')
  console.log(myself);
});

async function fetchJiraApi(config, method, endpoint) {
  const headers = { Authorization: `Basic ${window.btoa(config.userName + ':' + config.passphrase)}` };
  const response = await fetch(config.hostName + endpoint, { method, headers });
  return await response.json();
}
