//
//      Нужен для состояния загрузки
//

export default function ProjectsLoading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 h-9 w-40 animate-pulse rounded bg-gray-700" />

      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-700" />
        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-700 md:w-40" />
        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-700 md:w-40" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-700 bg-gray-900 p-5"
          >
            <div className="animate-pulse space-y-4">
              <div className="h-6 w-2/3 rounded bg-gray-700" />
              <div className="h-4 w-1/3 rounded bg-gray-700" />

              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-gray-700" />
                <div className="h-4 w-5/6 rounded bg-gray-700" />
              </div>

              <div className="flex gap-2">
                <div className="h-7 w-20 rounded bg-gray-700" />
                <div className="h-7 w-24 rounded bg-gray-700" />
              </div>

              <div className="h-4 w-28 rounded bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}