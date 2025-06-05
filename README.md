# Expo AV vs Expo Audio Compare

## Description

While migrating to `expo-audio` from `expo-av`, I noticed that my `play()` call operated a bit differently from the existing `playAsync()` call.

This repro is to showcase that to help understand if that is intended or a bug. If intended, maybe a good idea to document this change for users that are migrating. If not, certainly open to help fix the bug!

Using `expo-audio`, it seems as if `.seekTo(0)` needs to be applied to play the sound again.

## Screenshots

| Expo AV | Expo Audio |
| ---- | ---- |
| ![image](https://github.com/user-attachments/assets/b812deb6-82c7-412e-a6b3-8cfe9cf331b4) | ![image](https://github.com/user-attachments/assets/5af3f473-4355-4ea4-86f7-5c57cd742c6c) |

