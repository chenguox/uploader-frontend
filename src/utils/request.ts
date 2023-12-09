interface requestParams {
  url: string;
  method?: 'GET' | 'POST';
  data: any;
  headers?: any;
  onprogress?: any;
}

function request(params: requestParams) {
  const { url, method = 'POST', data, headers = {}, onprogress } = params;

  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.upload.onprogress = onprogress;

    xhr.onloadend = (e) => {
      resolve({
        data: e.target?.response,
      });
    };

    xhr.send(data);
  });
}

export default request;
