import "./Breadcrumbs.css";

import { FC, ReactNode } from "react";

export const Breadcrumbs: FC<{children: ReactNode }> = ({ children }) => {
  return <ul className="breadcrumbs">{children}</ul>;
}
