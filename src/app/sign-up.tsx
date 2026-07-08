import { useAuth, useSignUp, useSSO } from "@clerk/expo";
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

export default function SignUp() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signUp, errors, fetchStatus } = useSignUp();
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
          await signUp.verifications.verifyEmailCode({ code: verificationCode });
          if (signUp.status === "complete") {
            await signUp.finalize();
            router.replace("/");
          }
        } catch (error) {
          console.error("Verification failed:", error);
        }
      };
      finalize();
    }
  }, [verificationCode, router, signUp]);

  const handleSubmit = async () => {
    if (!email || !password) return;

    const { error } = await signUp.password({
      emailAddress: email,
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    if (
      signUp.status === "missing_requirements" &&
      signUp.unverifiedFields.includes("email_address") &&
      signUp.missingFields.length === 0
    ) {
      await signUp.verifications.sendEmailCode();
      setVerificationVisible(true);
      return;
    }

    if (signUp.status === "complete") {
      await signUp.finalize();
      router.replace("/");
      return;
    }

    console.error("Sign-up attempt not complete:", signUp);
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
      console.error(`Social sign-up failed (${strategy}):`, error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView className="flex-1 bg-white px-6 py-8" contentContainerStyle={{ flexGrow: 1 }}>
        <Link href="/onboarding" asChild>
          <Pressable className="mb-8 w-10 rounded-full border border-slate-200 bg-white/90 p-2 shadow-sm">
            <Text className="text-center text-lg font-semibold text-slate-900">←</Text>
          </Pressable>
        </Link>

        <View className="rounded-[32px] bg-slate-50 p-6 shadow-sm">
          <Text className="text-3xl font-bold text-slate-950">Create your account</Text>
          <Text className="mt-3 text-base leading-6 text-slate-600">Start your language journey today ✨</Text>

          <View className="mt-6 rounded-[28px] bg-white p-5 shadow-sm">
            <View className="space-y-4">
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
                <View className="flex-row items-center justify-between">
                  <TextInput
                    placeholder="••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="flex-1 text-base text-slate-900"
                  />
                  <Text className="text-base font-semibold text-slate-400">👁</Text>
                </View>
              </View>
            </View>

            <Pressable
              onPress={handleSubmit}
              className="mt-8 rounded-[24px] bg-violet-600 px-5 py-4 items-center shadow-xl shadow-violet-600/25"
            >
              <Text className="text-base font-semibold text-white">Sign Up</Text>
            </Pressable>
            <View nativeID="clerk-captcha" style={{ height: 0, width: 0 }} />
          </View>

          <View className="mt-6 rounded-[28px] bg-white p-5 shadow-sm">
            <View className="flex-row items-center justify-center gap-3">
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
          </View>

          <View className="mt-6 items-center">
            <Text className="text-sm text-slate-500">Already have an account?</Text>
            <Link href="/sign-in" asChild>
              <Pressable>
                <Text className="mt-2 text-sm font-semibold text-violet-600">Log in</Text>
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
