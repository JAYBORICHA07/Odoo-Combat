/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, ComponentType, ReactNode } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import SuspenseAndErrorBoundary from "../utils/SuspenseAndErrorBoundary";
import LoadingScreen from "../components/LoadingScreen";
import SvgIconStyle from "../components/SvgIconStyle";
import { Button, Result } from "antd";
import BuyPage from "../pages/buy/buy.page";
import ProductPage from "../pages/product/product.page";
import CategoryPage from "../pages/category/category.page";

const getIcon = (name: string): ReactNode => (
  <SvgIconStyle src={`/icons/${name}.svg`} style={{ width: 1, height: 1 }} />
);

export const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const LoadableComponent = (props: P) => {
    const { pathname } = useLocation();
    return (
      <SuspenseAndErrorBoundary
        suspenseUI={
          <LoadingScreen isDashboard={pathname.includes("/dashboard")} />
        }
      >
        <Component {...props} />
      </SuspenseAndErrorBoundary>
    );
  };
  return LoadableComponent;
};

const DashboardLayout = Loadable(
  lazy(() => import("../layouts/dashboards/index"))
);
const HomePage = Loadable(lazy(() => import("../pages/home/Home.page")));
const AuthSuccess = Loadable(lazy(() => import("../pages/auth/Success.page")));
const RegisterUser = Loadable(
  lazy(() => import("../pages/auth/Register.page"))
);

const PATH_DASHBOARD = {
  root: {
    path: "/",
    element: <DashboardLayout />,
    children: {
      root: {
        element: <Navigate to={"home"} replace />,
        index: true,
        path: "",
      },
      notFound: {
        title: "Page 404",
        path: "*",
        element: (
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Button
                type="primary"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Back Home
              </Button>
            }
          />
        ),
      },
      home: {
        title: "home",
        path: "/home",
        icon: getIcon("material-symbols-home-outline-rounded"),
        element: <DashboardLayout />,
        children: {
          root: {
            title: "Home",
            path: "/home",
            element: <BuyPage />,
          },
        },
      },
      category: {
        title: "category",
        path: "/category",
        icon: getIcon("material-symbols-home-outline-rounded"),
        element: <DashboardLayout />,
        children: {
          root: {
            title: "Category",
            path: "/category",
            element: <CategoryPage />,
          },
        },
      },
      auth: {
        path: "/auth",
        children: {
          login: {
            title: "User Login",
            path: "/auth/login",
            element: <HomePage />,
          },
          register: {
            title: "Register User",
            path: "/auth/register",
            element: <RegisterUser />,
          },
          // callback
          success: {
            title: "Success",
            path: "/auth/success",
            element: <AuthSuccess />,
          },
        },
      },
      buy: {
        title: "Buy",
        path: "/buy",
        icon: getIcon("material-symbols-shopping-cart-outline-rounded"),
        element: <DashboardLayout />,
        children: {
          root: {
            title: "Buy",
            path: "/buy",
            element: <BuyPage />,
          },
        },
      },
      product: {
        title: "Product",
        path: "/product",
        icon: getIcon("material-symbols-shopping-cart-outline-rounded"),
        element: <DashboardLayout />,
        children: {
          root: {
            title: "Product",
            path: "/product",
            element: <ProductPage />,
          },
        },
      },
    },
  },
};

export const PATH_OBJ = PATH_DASHBOARD.root.children;

// ----------------------------------------------------------------------

const childrenArray: any = (childrenObject: any) => {
  return Object.values(childrenObject).map((value) => {
    const { children, ...rest }: any = value;
    if (children) {
      return {
        ...rest,
        children: childrenArray(children),
        items: childrenArray(children).filter((pathObj: any) =>
          Boolean(pathObj.navbarPath)
        ),
      };
    } else {
      return { ...rest };
    }
  });
};

export const navRouteConfig = childrenArray(PATH_DASHBOARD.root.children);
// ----------------------------------------------------------------------
export default function Router() {
  return useRoutes(navRouteConfig);
}
