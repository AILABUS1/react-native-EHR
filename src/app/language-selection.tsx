import { images } from "@/../constants/images";
import { languages } from "@/data/languages";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LanguageSelection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string>(languages[0]?.id ?? "");

  const filtered = languages.filter((l) =>
    l.name.toLowerCase().includes(query.toLowerCase()) || l.nativeName?.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView className="flex-1 px-6 py-6" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="mb-4">
          <Text className="text-center text-2xl font-semibold text-slate-900">Choose a language</Text>
        </View>

        <View className="mb-6">
          <View className="rounded-2xl bg-slate-50 px-4 py-3">
            <View className="flex-row items-center">
              <Text className="text-slate-400 mr-3">🔍</Text>
              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Search languages"
                className="flex-1 text-base text-slate-700"
                placeholderTextColor="#94a3b8"
              />
            </View>
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-base font-semibold text-slate-800">Popular</Text>
        </View>

        <View className="space-y-3">
          {filtered.map((lang) => (
            <Pressable
              key={lang.id}
              onPress={() => setSelected(lang.id)}
              className={`flex-row items-center justify-between rounded-2xl px-4 py-4 bg-white shadow-sm ${
                selected === lang.id ? "border border-violet-500" : "border border-white"
              }`}
            >
              <View className="flex-row items-center">
                <Image source={{ uri: lang.flag }} className="w-10 h-10 rounded-full" />
                <View className="ml-4">
                  <Text className="text-base font-semibold text-slate-900">{lang.name}</Text>
                  {lang.description ? (
                    <Text className="text-sm text-slate-400">{lang.description}</Text>
                  ) : null}
                </View>
              </View>

              <View>
                {selected === lang.id ? (
                  <View className="rounded-full bg-violet-500 p-2">
                    <Text className="text-white">✓</Text>
                  </View>
                ) : (
                  <Text className="text-slate-300">›</Text>
                )}
              </View>
            </Pressable>
          ))}
        </View>

        <View className="mt-6">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center justify-center rounded-2xl bg-violet-600 px-4 py-4"
          >
            <Text className="text-base font-semibold text-white">Confirm</Text>
          </Pressable>
        </View>

        <View className="mt-8 items-center">
          <Image source={images.earth} className="w-full h-40" resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
