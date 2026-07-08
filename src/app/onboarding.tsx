import { Link } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView className="flex-1 bg-white px-6 py-8" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mb-7 rounded-[32px] bg-slate-50 px-5 py-5">
          <Text className="text-2xl font-bold text-orange-500">ESMA's EHR</Text>
        </View>

        <View className="rounded-[32px] bg-slate-50 p-6 shadow-sm">
          <Text className="text-4xl font-bold text-slate-950">Welcome to ESMA's EHR</Text>
          <Text className="mt-4 text-base leading-7 text-slate-600">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>

          <View className="mt-6 flex-row flex-wrap justify-between gap-3">
            <View className="rounded-3xl bg-white px-4 py-3 shadow-sm">
              <Text className="text-sm font-semibold text-slate-900">Hello!</Text>
            </View>
            <View className="rounded-3xl bg-white px-4 py-3 shadow-sm">
              <Text className="text-sm font-semibold text-violet-800">¡Hola!</Text>
            </View>
            <View className="rounded-3xl bg-white px-4 py-3 shadow-sm">
              <Text className="text-sm font-semibold text-rose-800">你好!</Text>
            </View>
          </View>

          <View className="mt-8 items-center">
            <View className="w-full max-w-[380px] rounded-[28px] bg-slate-50">
              <Image
                source={require("../../assets/images/mascot-welcome.png")}
                className="w-full aspect-[4/3]"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View className="mt-8 space-y-3 rounded-[32px] bg-slate-50 p-6 shadow-sm">
          <Text className="text-sm uppercase tracking-[0.2em] text-slate-400">All You Can Eat.</Text>
          <Text className="text-sm leading-6 text-slate-600">
            ESMA's EHR brings learning and conversation together in a friendly experience built for every learner.
          </Text>
        </View>

        <View className="mt-auto pt-6">
          <Link href="/sign-up" asChild>
            <Pressable className="rounded-[24px] bg-blue-600 px-5 py-4 items-center shadow-xl shadow-blue-600/25">
              <Text className="text-base font-semibold text-white">Get Started</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
