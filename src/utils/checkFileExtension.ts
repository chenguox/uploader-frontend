// const fs = require('fs');

// /**
//  * 获取文件后缀
//  * @param filePath 文件路径
//  * @returns 返回后缀
//  */
// function getFileExtension(filePath: string): string {
//   // 获取最有一个.的位置
//   const index = filePath.lastIndexOf('.');
//   // 获取后缀
//   const ext = filePath.slice(index + 1);

//   return ext;
// }

// /**
//  * 校验文件后缀(非严格)
//  * @param filePath 文件路径
//  * @param match 文件类型
//  * @returns
//  */
// function easyCheckFileExtension(filePath: string, match: string): boolean {
//   const ext = getFileExtension(filePath);
//   if (ext === match) {
//     return true;
//   }

//   return false;
// }

// /**
//  * 校验文件后缀(严格)
//  * @param filePath 文件路径
//  * @param match 文件类型
//  * @returns
//  */
// async function checkFileExtension(file: File, match: string): Promise<boolean> {
//   const buffers = await readBuffer(file);
//   const uint8Array = new Uint8Array(buffers);

//   const png = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

//   // @ts-ignore
//   const isEqual = (buffer, type) => {
//     // @ts-ignore
//     return type.every((item, index) => item === buffer[index]);
//   };

//   if (match === 'png') {
//     return isEqual(uint8Array, png);
//   }

//   return false;
// }

// /**
//  * 读取文件指定范围的字节内容
//  * @param file 要读取的文件
//  * @param start 开始索引
//  * @param end 结束索引
//  * @returns
//  */
// function readBuffer(file: File, start: number = 0, end: number = 8): Promise<any> {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();

//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };

//     fileReader.onerror = reject;

//     fileReader.readAsArrayBuffer(file.slice(start, end));
//   });
// }

// export { checkFileExtension };
