//A:\React\medicalRag\src\hooks\useMedicalRAG.ts
import { useMutation } from "@tanstack/react-query";
import { postMedicalQuery } from "../services/api";
import type { QueryResponse } from "../services/api";

export const useMedicalRAGQuery = () => {
  return useMutation<QueryResponse, Error, string>({
    mutationFn: (query: string) => postMedicalQuery(query),
    onSuccess: (data) => {
      console.log("Query successful:", data);
    },
    onError: (error) => {
      console.error("Query failed:", error);
    },
  });
};
