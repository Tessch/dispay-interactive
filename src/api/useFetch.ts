const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";
export const useFetch = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${path}`);
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`HTTP ${response.status} ${text}`.trim());
    }
    return await response.json();
  } catch (error) {
    console.error("API error", error);
    throw error;
  }
};
