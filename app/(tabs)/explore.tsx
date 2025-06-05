import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";

import { Image } from "expo-image";
import { useEffect } from "react";
import { Button, StyleSheet } from "react-native";

const audioSource = require("@/assets/sounds/rest-period.mp3");

export default function TabTwoScreen() {
  const player = useAudioPlayer(audioSource);

  useEffect(() => {
    setAudioModeAsync({
      playsInSilentMode: true,
      interruptionModeAndroid: "duckOthers",
    });
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Expo Audio</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <Button title="Play Sound" onPress={() => player.play()} />
        <ThemedText type="subtitle">Step 2: Tap `Play Sound` again</ThemedText>
        <ThemedText type="subtitle">Step 3: Observe it does _not_ play again ❌</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
