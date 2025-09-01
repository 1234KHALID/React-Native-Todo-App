import { ThemeProvider } from "@/hooks/use-theme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

const address = "https://small-mouse-123.convex.cloud";
const convex = new ConvexReactClient(address);

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
