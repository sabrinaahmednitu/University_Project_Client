import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};

export const routesGenerator = (items: TUserPaths[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      //kono array dorkar ni tai forEach use korchi ,individual object lagbe sudhu
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);
  return routes;
};
