import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";

export interface Wallet {
  readonly name: string;
  readonly type: string[];
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
}

export async function getWallets(locale: string): Promise<readonly Wallet[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(`${process.cwd()}/_crowdin/data/wallets/${locale}.json`, "utf8")
          )
      )
    );
  } catch (cause) {
    throw new Error("getWallets failed!", {
      cause,
    });
  }
}