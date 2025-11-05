import { define } from "../../utils.ts";
import { DocsPage } from "./index.tsx";

// Handler cho catch-all routes /docs/*
export const handler = define.handlers({
  GET(ctx) {
    return ctx.render();
  },
});

export default define.page<typeof handler>(function DocsCatchAllPage(props) {
  // Lấy path từ params, nó sẽ là một string với "/" làm separator
  const pathString = props.params.path || "";
  const pathSegments = pathString.split("/").filter((s) => s.length > 0);

  return <DocsPage path={pathSegments} />;
});
