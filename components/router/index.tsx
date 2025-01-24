import { useEffect, useState } from 'react';

interface Route {
  route: JSX.Element;
  pathname: string;
}

interface Props {
  routes: Route[];
}

// Simple router
export function Router(props: Props) {
  const [currentRoute, setRoute] = useState(window.location.pathname);
  const { routes } = props;
  const pathToRouteElement = routes.reduce((acc, curr) => {
    acc[curr.pathname] = curr.route;
    return acc;
  }, {} as Record<string, JSX.Element>);

  useEffect(() => {
    console.log('Router effect');
    const onLocationChange = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const renderRoute = () => {
    return pathToRouteElement[currentRoute];
  };

  return <>{renderRoute()}</>;
}
