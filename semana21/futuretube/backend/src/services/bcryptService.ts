import { CryptographyGateway } from "../business/gateways/cryptographyGateway";

export class BcryptService implements CryptographyGateway {
  // private static BCRYPT_SALTS_ROUND = 10;

  async encrypt(word: string): Promise<string> {
    // const generatedSalt = await bcrypt.genSalt(
    //   BcryptService.BCRYPT_SALTS_ROUND
    // );
    // const result = await bcrypt.hash(word, generatedSalt);
    return word;
  }

  async compare(word: string, hash: string): Promise<boolean> {
    return word === hash
  }
}