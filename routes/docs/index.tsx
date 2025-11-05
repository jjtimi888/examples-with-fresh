import { define } from "../../utils.ts";

// Component dùng chung cho cả index và catch-all routes
export function DocsPage(props: { path: string[] }) {
  const { path } = props;
  const pathString = path.length > 0 ? `/${path.join("/")}` : "/";

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Fresh v2 Dynamic Routes Demo</h1>
        <p class="my-4">
          Đây là ví dụ về <strong>optional catch-all routes</strong> tương tự{" "}
          <code>[[...slugs]]</code> trong Next.js
        </p>

        <div class="bg-white p-6 rounded-lg shadow-lg my-6 w-full">
          <h2 class="text-2xl font-semibold mb-4">Thông tin Route:</h2>
          <div class="space-y-2">
            <p>
              <strong>Current Path:</strong>{" "}
              <code class="bg-gray-100 px-2 py-1 rounded">{pathString}</code>
            </p>
            <p>
              <strong>Path Segments:</strong>{" "}
              <code class="bg-gray-100 px-2 py-1 rounded">
                {path.length === 0 ? "[]" : JSON.stringify(path)}
              </code>
            </p>
            <p>
              <strong>Depth:</strong> {path.length}
            </p>
          </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-lg w-full">
          <h3 class="text-xl font-semibold mb-3">Thử các URLs sau:</h3>
          <ul class="space-y-2">
            <li>
              <a href="/docs" class="text-blue-600 hover:underline">
                /docs
              </a>{" "}
              - Base path (empty segments)
            </li>
            <li>
              <a href="/docs/getting-started" class="text-blue-600 hover:underline">
                /docs/getting-started
              </a>{" "}
              - 1 segment
            </li>
            <li>
              <a
                href="/docs/getting-started/installation"
                class="text-blue-600 hover:underline"
              >
                /docs/getting-started/installation
              </a>{" "}
              - 2 segments
            </li>
            <li>
              <a
                href="/docs/api/reference/components/button"
                class="text-blue-600 hover:underline"
              >
                /docs/api/reference/components/button
              </a>{" "}
              - 4 segments
            </li>
          </ul>
        </div>

        <div class="mt-8 text-sm text-gray-600">
          <p>
            <a href="/" class="text-blue-600 hover:underline">
              ← Quay về trang chủ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Handler cho base path /docs
export const handler = define.handlers({
  GET(ctx) {
    return ctx.render();
  },
});

export default define.page<typeof handler>(function DocsIndexPage(props) {
  return <DocsPage path={[]} />;
});
