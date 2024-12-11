import { Loading } from "@app/components";
import React, { Suspense } from "react";

const withSuspense = (
  Component: React.LazyExoticComponent<React.FC<any>>
): React.FC => {
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
