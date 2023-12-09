// type RequestMethod = 'GET' | 'POST';
// type RequestHeaders = Headers | Record<string, string | number | null | undefined>;
// interface RequestProgressEvent extends ProgressEvent {
//   percent: number;
// }
// interface AjaxRequestOptions {
//   url: string;
//   method: RequestMethod;
//   timeout?: number;
//   data: XMLHttpRequestBodyInit;
//   headers?: RequestHeaders;
//   onUploadProgress?: (e: RequestProgressEvent) => void;
// }

// export const ajaxRequest = (options: AjaxRequestOptions): XMLHttpRequest => {
//   const xhr = new XMLHttpRequest();

//   const url = options.url

//   const { url, method, timeout } = options

//   if (timeout !== undefined) { // 设置超时时间
//     xhr.timeout = timeout
//   }

//   if (xhr.upload && options.onUploadProgress) { // 监听上传事件（进度条）
//     xhr.addEventListener('progress', (e) => {

//     })
//   }

//   return xhr;
// };
