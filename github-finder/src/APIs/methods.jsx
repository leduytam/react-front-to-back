const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const methods = {
  get: getMethod
};

function getMethod(url, configs = {}) {
  return fetch(`${GITHUB_API}/${url}`, {
    ...configs,
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`
    }
  });
}

export default methods;
