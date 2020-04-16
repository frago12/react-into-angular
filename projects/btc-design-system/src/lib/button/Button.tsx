// @ts-nocheck
import * as React from "react";

import { AppProvider, Button } from "@shopify/polaris";

function ButtonWrapper({ children }) {
  return (
    <AppProvider>
      <Button>{children}</Button>
    </AppProvider>
  );
}

export default ButtonWrapper;
