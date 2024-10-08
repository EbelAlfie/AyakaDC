import * as crypto from 'crypto';
export const decode = (str) => {
    try {
      return Buffer.from(str, 'base64').toString('utf-8');
    } catch (error) {
      throw new Error('Failed to decode base64 string');
    }
  };
  
  export const encode = (str) => {
    try {
      return Buffer.from(str, 'utf-8').toString('base64');
    } catch (error) {
      throw new Error('Failed to encode string to base64');
    }
  };

  export function encryptStringWithRsaPublicKey(args) {
    const { text, publicKey } = args;

    //const publicKeyDecoded = decode(publicKey);
  
    const buffer = Buffer?.from(text);
    const encrypted = crypto?.publicEncrypt(publicKey, buffer);
  
    return encrypted.toString('base64');
  }
  
  export default encryptStringWithRsaPublicKey;