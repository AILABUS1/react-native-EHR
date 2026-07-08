import { useAuth, useSignIn, useSSO } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signIn, errors, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    if (verificationCode.length === 6) {
      const finalize = async () => {
        try {
          await signIn.mfa.verifyEmailCode({ code: verificationCode });
          if (signIn.status === "complete") {
            await signIn.finalize();
            router.replace("/");
          }
        } catch (error) {
          console.error("Verification failed:", error);
        }
      };
      finalize();
    }
  }, [verificationCode, router, signIn]);

  const handleSubmit = async () => {
    if (!email || !password) return;

    const { error } = await signIn.password({
      emailAddress: email,
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize();
      router.replace("/");
      return;
    }

    if (
      signIn.status === "needs_client_trust" ||
      signIn.status === "needs_second_factor"
    ) {
      const emailCodeFactor = signIn.supportedSecondFactors?.find(
        (factor) => factor.strategy === "email_code",
      );

      if (emailCodeFactor) {
        await signIn.mfa.sendEmailCode();
        setVerificationVisible(true);
        return;
      }
    }

    console.error("Sign-in attempt not complete:", signIn);
  };

  const providerStrategyMap = {
    google: "oauth_google",
    apple: "oauth_apple",
    facebook: "oauth_facebook",
  } as const;

  type SSOProvider = keyof typeof providerStrategyMap;

  const handleSocialSignIn = async (strategy: SSOProvider) => {
    try {
      const result = await startSSOFlow({ strategy: providerStrategyMap[strategy] });
      if (result.createdSessionId && result.setActive) {
        await result.setActive({ session: result.createdSessionId });
      }
      if (result.createdSessionId) {
        router.replace("/");
      }
    } catch (error) {
      console.error(`Social sign-in failed (${strategy}):`, error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <ScrollView className="flex-1 px-6 py-8" contentContainerStyle={{ flexGrow: 1 }}>
        <Link href="/sign-up" asChild>
          <Pressable className="mb-8 w-10 rounded-full border border-slate-200 bg-white/90 p-2 shadow-sm">
            <Text className="text-center text-lg font-semibold text-slate-900">←</Text>
          </Pressable>
        </Link>

        <View className="rounded-[32px] bg-white p-6 shadow-sm">
          <Text className="text-3xl font-bold text-slate-950">Sign in to your account</Text>
          <Text className="mt-3 text-base leading-6 text-slate-600">Continue your language journey today ✨</Text>

          <Text className="mt-6 text-sm leading-6 text-slate-500">
            Continue with ease using email or social auth for a fast mobile sign-in.
          </Text>

          <View className="mt-8 space-y-4">
            <View className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
              <Text className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</Text>
              <TextInput
                placeholder="alex@gmail.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="text-base text-slate-900"
              />
            </View>

            <View className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
              <Text className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Password</Text>
              <TextInput
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="text-base text-slate-900"
              />
            </View>
          </View>

          <Pressable
            onPress={handleSubmit}
            className="mt-8 rounded-[24px] bg-violet-600 px-5 py-4 items-center shadow-xl shadow-violet-600/25"
          >
            <Text className="text-base font-semibold text-white">Sign In</Text>
          </Pressable>

          <View className="mt-6 flex-row items-center justify-center gap-3">
            <View className="h-px flex-1 bg-slate-200" />
            <Text className="text-sm uppercase tracking-[0.2em] text-slate-400">or continue with</Text>
            <View className="h-px flex-1 bg-slate-200" />
          </View>

          <View className="mt-6 space-y-3">
            <Pressable
              onPress={() => handleSocialSignIn("google")}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
            >
              <Text className="text-center text-base font-semibold text-slate-900">Continue with Google</Text>
            </Pressable>
            <Pressable
              onPress={() => handleSocialSignIn("facebook")}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
            >
              <Text className="text-center text-base font-semibold text-slate-900">Continue with Facebook</Text>
            </Pressable>
            <Pressable
              onPress={() => handleSocialSignIn("apple")}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
            >
              <Text className="text-center text-base font-semibold text-slate-900">Continue with Apple</Text>
            </Pressable>
          </View>

          <View className="mt-8 items-center">
            <Text className="text-sm text-slate-500">Don’t have an account?</Text>
            <Link href="/sign-up" asChild>
              <Pressable>
                <Text className="mt-2 text-sm font-semibold text-violet-600">Sign up</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>

      <Modal visible={verificationVisible} transparent animationType="fade">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View className="flex-1 items-center justify-center bg-black/40 px-6">
            <View className="w-full max-w-md rounded-[32px] bg-white p-6 shadow-xl">
              <Text className="text-xl font-bold text-slate-950">Verification code sent</Text>
              <Text className="mt-2 text-sm leading-6 text-slate-600">
                Enter the 6-digit code from your email to continue.
              </Text>

              <TextInput
                value={verificationCode}
                onChangeText={(text) => setVerificationCode(text.replace(/[^0-9]/g, ""))}
                keyboardType="number-pad"
                maxLength={6}
                placeholder="Enter code"
                className="mt-6 rounded-3xl border border-slate-200 bg-slate-100 px-4 py-4 text-center text-lg tracking-[0.35em] text-slate-900"
              />

              <Pressable
                onPress={() => setVerificationVisible(false)}
                className="mt-6 rounded-[24px] bg-slate-100 px-4 py-3 items-center"
              >
                <Text className="text-sm font-semibold text-slate-700">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
