import { useState } from 'react'

interface QueryFormProps {
  onSubmit: (query: string) => void
  isSubmitting: boolean
}

export default function QueryForm({ onSubmit, isSubmitting }: QueryFormProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query.trim())
      
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Example: What are the main differences between type 1 and type 2 diabetes?"
          className="flex-grow p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px] resize-y shadow-sm"
          disabled={isSubmitting}
          aria-label="Medical question input"
        />

        <button
          type="submit"
          disabled={isSubmitting || !query.trim()}
          className={`
            px-8 py-4 rounded-xl font-medium text-white
            transition-all duration-200 shadow-md
            ${isSubmitting || !query.trim()
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            }
          `}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Thinking...
            </span>
          ) : (
            'Ask →'
          )}
        </button>
      </div>
    </form>
  )
}