import type { ReactElement } from "react";

export function Loader(): ReactElement {
  return (
    <div className="loader" role="status" aria-label="Loading joke">
      <div className="loader__hole"></div>
    </div>
  );
}
