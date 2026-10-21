import { cacheLife } from "next/cache";

/** ビルド時/キャッシュ更新時の西暦。Cache Components 下で `new Date()` を使うための `"use cache"` 境界 */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
