import * as fs from 'fs';

export function loadAbi(abiFile: string): [] {
  const abiData = fs.readFileSync(abiFile).toString();
  return JSON.parse(abiData);
}

export function pathWithSlash(path: string): string {
  if (path.endsWith('/')) {
    return path;
  }
  return path + '/';
}

export function getKeyAsEthereumKey(privateKey: string): string {
  if (privateKey.startsWith('0x')) {
    return privateKey;
  }
  return '0x' + privateKey;
}
