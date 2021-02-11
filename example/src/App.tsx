import * as React from "react";

import { StyleSheet, Pressable, Text } from "react-native";
import { useButton } from "@react-native-aria/button";
import { OverlayContainer, OverlayProvider } from "@react-native-aria/overlays";

export default function App() {
  const ref = React.useRef(null);
  return (
    <OverlayProvider>
      <Pressable ref={ref}>
        {/* <A /> */}
        <Text>Hello</Text>
      </Pressable>
      <OverlayContainer>
        <Text>Hello world</Text>
      </OverlayContainer>
    </OverlayProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
