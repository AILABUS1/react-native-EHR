import { useAuth } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { isLoaded, isSignedIn, signOut } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      {isLoaded && isSignedIn ? (
        <Pressable
          onPress={handleSignOut}
          className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2"
        >
          <Text className="text-sm font-semibold text-white">Sign Out</Text>
        </Pressable>
      ) : null}

      <Text className="text-center text-3xl font-bold text-white">
        ESMA's EHR
      </Text>
      <Text className="mt-3 text-center text-sm text-slate-300">
        Welcome to ESMA's EHR Systems
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-8 rounded-3xl bg-cyan-500 px-6 py-4 shadow-lg shadow-cyan-500/20">
          <Text className="text-base font-semibold text-white">Open Onboarding</Text>
        </Pressable>
      </Link>

      <Link href="/language-selection" asChild>
        <Pressable className="mt-4 rounded-3xl bg-white/10 px-6 py-3">
          <Text className="text-base font-semibold text-white">Choose Language</Text>
        </Pressable>
      </Link>
    </View>
  );
}
