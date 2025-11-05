import { useSignal } from "@preact/signals";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  ctx.state.title = count.value + " Fresh Counter" +
    (Math.abs(count.value) === 1 ? "" : "s");

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
        <div class="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 class="text-xl font-semibold mb-2">Demo: Optional Catch-All Routes</h2>
          <p class="mb-3 text-sm">
            Xem ví dụ về dynamic routes tương tự <code>[[...slugs]]</code> trong Next.js:
          </p>
          <a
            href="/docs"
            class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Xem Demo /docs
          </a>
        </div>
      </div>
    </div>
  );
});
