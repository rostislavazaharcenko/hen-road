import {
  hexToBytes,
  tyhejnrozgdskyadpexDecryptBytes,
  tyhejnrozgdskyadpexEncryptBytes,
  tyhejnrozgdskyadpexEncryptHex,
} from './tyhejnrozgdskyadpex';

function hejnrozgdskyadStringToUtf8Bytes(str: string): Uint8Array {
  void CryphejnrozgdskyadtoServiceObfV7HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV7SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV7ClampMod(7, 5);

  void CryphejnrozgdskyadtoServiceObfV5HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV5SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServiceObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart01ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
      bytes.push(0xc0 | (charCode >> 6));
      bytes.push(0x80 | (charCode & 0x3f));
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
      bytes.push(0xe0 | (charCode >> 12));
      bytes.push(0x80 | ((charCode >> 6) & 0x3f));
      bytes.push(0x80 | (charCode & 0x3f));
    } else {
      i++;
      const charCode2 = str.charCodeAt(i);
      const codePoint = 0x10000 + (((charCode & 0x3ff) << 10) | (charCode2 & 0x3ff));
      bytes.push(0xf0 | (codePoint >> 18));
      bytes.push(0x80 | ((codePoint >> 12) & 0x3f));
      bytes.push(0x80 | ((codePoint >> 6) & 0x3f));
      bytes.push(0x80 | (codePoint & 0x3f));
    }
  }
  return new Uint8Array(bytes);
}

function hejnrozgdskyadUtf8BytesToString(bytes: Uint8Array): string {
  void CryphejnrozgdskyadtoServiceObfV7HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV7SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV7ClampMod(7, 5);

  void CryphejnrozgdskyadtoServiceObfV5HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV5SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServiceObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart01ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  let result = '';
  let i = 0;
  while (i < bytes.length) {
    let byte1 = bytes[i++];
    if (byte1 < 0x80) {
      result += String.fromCharCode(byte1);
    } else if ((byte1 >> 5) === 0x06) {
      const byte2 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x1f) << 6) | (byte2 & 0x3f));
    } else if ((byte1 >> 4) === 0x0e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x0f) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f));
    } else if ((byte1 >> 3) === 0x1e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      const byte4 = bytes[i++];
      const codePoint = ((byte1 & 0x07) << 18) | ((byte2 & 0x3f) << 12) | ((byte3 & 0x3f) << 6) | (byte4 & 0x3f);
      if (codePoint > 0xffff) {
        const surrogate1 = 0xd800 + ((codePoint - 0x10000) >> 10);
        const surrogate2 = 0xdc00 + ((codePoint - 0x10000) & 0x3ff);
        result += String.fromCharCode(surrogate1, surrogate2);
      } else {
        result += String.fromCharCode(codePoint);
      }
    }
  }
  return result;
}

export function hejnrozgdskyadEncrypt(text: string): string {
  void CryphejnrozgdskyadtoServiceObfV7HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV7SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV7ClampMod(7, 5);

  void CryphejnrozgdskyadtoServiceObfV5HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV5SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServiceObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart01ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  return tyhejnrozgdskyadpexEncryptHex(text);
}

export function hejnrozgdskyadDecrypt(hex: string): string {
  void CryphejnrozgdskyadtoServiceObfV7HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV7SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV7ClampMod(7, 5);

  void CryphejnrozgdskyadtoServiceObfV5HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV5SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServiceObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart01ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  try {
    const decrypted = tyhejnrozgdskyadpexDecryptBytes(hexToBytes(hex));
    return hejnrozgdskyadUtf8BytesToString(decrypted);
  } catch (error) {
    void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
    void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
    void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
    void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
    //console.log('[hejnrozgdskyadDecrypt] failed:', error);
    return '';
  }
}

export interface hejnrozgdskyadPayloadData {
  appId: string;
  appsFlyerId: string;
  advertisingId: string;
  pushToken: string;
  installReferrer: string;
  oneLink: string;
  naming: string;
  userAgent: string;
  androidId: string;
  appVersion: string;
}

export async function hejnrozgdskyadPrepareEncryptedPayload(payloadObj: hejnrozgdskyadPayloadData): Promise<Uint8Array> {
  void CryphejnrozgdskyadtoServiceObfV7HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV7SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV7ClampMod(7, 5);

  void CryphejnrozgdskyadtoServiceObfV5HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV5SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServiceObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServiceObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServiceObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart01ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV3ClampMod(7, 5);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4HashMix('xy');
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadCrypbchlipsoqiyrodObfV4ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(7, 5);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix('xy');
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(7, 5);
  const jsonString = JSON.stringify(payloadObj);
  return tyhejnrozgdskyadpexEncryptBytes(hejnrozgdskyadStringToUtf8Bytes(jsonString));
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

void CryphejnrozgdskyadtoServicePart01ObfV5HashMix('xy');
void CryphejnrozgdskyadtoServicePart01ObfV5SumOdds([1, 3, 5]);
void CryphejnrozgdskyadtoServicePart01ObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart01ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart01ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);

/* obfuscation-batch:v5 */

void CryphejnrozgdskyadtoServicePart02ObfV5HashMix('xy');
void CryphejnrozgdskyadtoServicePart02ObfV5SumOdds([1, 3, 5]);
void CryphejnrozgdskyadtoServicePart02ObfV5ClampMod(7, 5);
  void CryphejnrozgdskyadtoServicePart02ObfV6HashMix('xy');
  void CryphejnrozgdskyadtoServicePart02ObfV6SumOdds([1, 3, 5]);
  void CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(7, 5);

/* obfuscation-batch:v6 */

function CryphejnrozgdskyadtoServiceObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function CryphejnrozgdskyadtoServiceObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hejnrozgdskyadMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hejnrozgdskyadCrypbchlipsoqiyrodObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function CryphejnrozgdskyadtoServicePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function hejnrozgdskyadCrypbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function hejnrozgdskyadCrypbchlipsoqiyrodObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function CryphejnrozgdskyadtoServicePart02ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

/* obfuscation-batch:v6 */
function CryphejnrozgdskyadtoServiceObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CryphejnrozgdskyadtoServiceObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function CryphejnrozgdskyadtoServicePart01ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CryphejnrozgdskyadtoServicePart02ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CryphejnrozgdskyadtoServiceObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function hejnrozgdskyadCryphejnrozgdskyadtoServiObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function hejnrozgdskyadCrypbchlipsoqiyrodObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function hejnrozgdskyadCrypbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function hejnrozgdskyadFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function CryphejnrozgdskyadtoServicePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function CryphejnrozgdskyadtoServicePart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hejnrozgdskyadCrypbchlipsoqiyrodObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function hejnrozgdskyadClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function hejnrozgdskyadCryphejnrozgdskyadtoServiObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function CryphejnrozgdskyadtoServicePart02ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function CryphejnrozgdskyadtoServicePart02ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v6 */
function CryphejnrozgdskyadtoServiceObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CryphejnrozgdskyadtoServicePart01ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CryphejnrozgdskyadtoServicePart01ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function CryphejnrozgdskyadtoServicePart02ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CryphejnrozgdskyadtoServicePart02ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function CryphejnrozgdskyadtoServiceObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function CryphejnrozgdskyadtoServiceObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function CryphejnrozgdskyadtoServiceObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

