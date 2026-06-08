import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import NdbRenewalPage from "./page";

describe("/ndb-renewal ページ", () => {
  it("ページがクラッシュせず描画できること", () => {
    expect(() => renderToStaticMarkup(<NdbRenewalPage />)).not.toThrow();
  });

  it("ヒーローの見出しが表示されること", () => {
    const html = renderToStaticMarkup(<NdbRenewalPage />);
    expect(html).toContain("情報技術で未来を創る");
  });

  it("サービス3件が表示されること", () => {
    const html = renderToStaticMarkup(<NdbRenewalPage />);
    expect(html).toContain("開発・導入サービス");
    expect(html).toContain("オンサイトサービス");
    expect(html).toContain("コンサルテーションサービス");
  });

  it("サービスがちょうど3件であること", () => {
    const html = renderToStaticMarkup(<NdbRenewalPage />);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const serviceHeadings = doc.querySelectorAll("#services h3");
    expect(serviceHeadings.length).toBe(3);
  });

  it("採用向けセクションが表示されること", () => {
    const html = renderToStaticMarkup(<NdbRenewalPage />);
    expect(html).toContain("採用情報");
  });

  it("お問い合わせ導線が表示されること", () => {
    const html = renderToStaticMarkup(<NdbRenewalPage />);
    expect(html).toContain("お問い合わせ");
  });
});
