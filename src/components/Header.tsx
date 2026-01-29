export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white shadow-md backdrop-blur supports-[backdrop-filter]:bg-opacity-90">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            MediRAG
          </div>
          <div className="hidden sm:block text-xs sm:text-sm font-medium opacity-90">
            Ask • Retrieve • Generate
          </div>
        </div>

      
        <div className="text-xs sm:text-sm font-medium opacity-85">
          Powered by <span className="font-semibold">Pinecone</span> + Modern LLM
        </div>
      </div>
    </header>
  );
}
