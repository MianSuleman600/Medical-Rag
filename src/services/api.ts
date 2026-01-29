// src/services/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',  
  timeout: 60000,   
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface QueryResponse {
  status: 'success' | 'error'
  answer?: string
  sources?: string[]
  message?: string   
  metadata?: Record<string, string | number | boolean>
}

export const postMedicalQuery = async (query: string): Promise<QueryResponse> => {
  try {
    
    const formData = new FormData()
    formData.append('question', query)

    const response = await api.post<QueryResponse>('/rag/rag/query', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',   
      },
    })

    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'Query failed')
    }

    return response.data
  } catch (err: unknown) {
    const error = err as { response?: { data?: { detail?: string } }; message?: string }
    if (error.response?.data?.detail) {
      throw new Error(error.response.data.detail)
    }
    throw new Error(error.message || 'Network error – is backend running?')
  }
}