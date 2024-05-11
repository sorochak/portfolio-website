import { useContext } from "react";
import { StyleContext } from "../components/BaseView";

const useSharedStyles = () => {
  const styles = useContext(StyleContext);
  if (!styles) {
    throw new Error("useSharedStyles must be used within a StyleProvider");
  }
  return styles;
};

export default useSharedStyles;
