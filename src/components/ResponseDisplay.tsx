import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ResponseDisplayProps {
  isLoading: boolean
  error: Error | null
  data: { answer: string; sources?: string[] } | undefined
  query: string
}

export default function ResponseDisplay({ isLoading, error, data, query }: ResponseDisplayProps) {
  if (!query && !isLoading && !error && !data) {
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      {isLoading && (
        <div className="p-8 text-center text-slate-500">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            <div className="h-3 bg-slate-200 rounded w-5/6"></div>
            <div className="h-3 bg-slate-200 rounded w-4/6"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-6 bg-red-50 border-t border-red-100">
          <h3 className="text-red-800 font-medium mb-2">Something went wrong</h3>
          <p className="text-red-700">{error.message || 'Failed to get response from server'}</p>
        </div>
      )}

      {data && (
        <div className="p-6 md:p-8">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.answer}
            </ReactMarkdown>
          </div>

          {data.sources && data.sources.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Sources / References
              </h4>
              <ul className="space-y-2 text-sm">
                {data.sources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                    >
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}