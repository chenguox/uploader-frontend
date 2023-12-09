// // import { createChunk } from './fileChunk.ts';
// import SparkMD5 from 'spark-md5';

// const workerCode = () => {
//   self.importScripts('./spark-md5.min.js');

//   self.onmessage = function (file, DefaultChunkSize) {
//     const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
//     const chunks = Math.ceil(file.size / DefaultChunkSize); // 多少块分片
//     // const spark = new self.SparkMD5.ArrayBuffer(); // 哈希处理器
//     const spark = new Spark(); // 哈希处理器
//     const fileReader = new FileReader(); // 文件读取器
//     let currentChunk = 0; // 当前第几块

//     fileReader.onload = function (e) {
//       console.log('read chunk nr', currentChunk + 1, 'of');
//       const chunk = e.target?.result;
//       spark.append(chunk);
//       currentChunk++;

//       if (currentChunk < chunks) {
//         loadNext();
//       } else {
//         const fileHash = spark.end();
//         console.info('finished computed hash', fileHash); // 此处为重点，计算完成后，仍然通过postMessage通知主线程
//         postMessage({ fileHash, fileReader });
//       }
//     };

//     fileReader.onerror = function () {
//       console.warn('读取分片错误~');
//     };

//     function loadNext() {
//       // 1、获取分片的范围
//       const start = currentChunk * DefaultChunkSize;
//       let end = start + DefaultChunkSize;
//       if (end > file.size) {
//         // 最后一块的范围会超过文件总大小
//         end = file.size;
//       }

//       // 2、切出分片
//       const chunk = blobSlice.call(file, start, end);

//       // 3、读取分片内容
//       fileReader.readAsArrayBuffer(chunk);
//     }

//     // 开始处理
//     loadNext();
//   };
// };

// let code = workerCode.toString();
// code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
// const blob = new Blob([code], { type: 'application/javascript' });
// const workerScriptURL = URL.createObjectURL(blob);

// export default workerScriptURL;
