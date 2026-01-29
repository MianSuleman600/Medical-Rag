import { useState } from 'react'
import Header from './components/Header'
import QueryForm from './components/QueryForm'
import ResponseDisplay from './components/ResponseDisplay'
import { useMedicalRAGQuery } from './hooks/useMedicalRAG'

function App() {
  const [lastSubmittedQuery, setLastSubmittedQuery] = useState<string>('')

  const mutation = useMedicalRAGQuery()

  const handleSubmit = (query: string) => {
    if (!query.trim()) return
    setLastSubmittedQuery(query)
    mutation.mutate(query)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">
            Ask any medical or health-related question
          </h2>
          <p className="text-slate-600">
            Powered by Retrieval-Augmented Generation + Pinecone vector database
          </p>
        </div>

        <QueryForm
          onSubmit={handleSubmit}
          isSubmitting={mutation.isPending}
        />

        <div className="mt-10">
          <ResponseDisplay
            isLoading={mutation.isPending}
            error={mutation.error}
            data={mutation.data}
            query={lastSubmittedQuery}
          />
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 border-t">
        <p>Medical RAG Demo • For educational and research purposes only • Not medical advice</p>
      </footer>
    </div>
  )
}

export default App