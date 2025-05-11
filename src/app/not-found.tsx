'use client'

export default function NotFound() {
    return (
        <body>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-md p-8 text-center">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Страница не найдена</h2>
              <p className="text-gray-600 mb-8">
                К сожалению, мы не смогли найти страницу, которую вы ищете.
              </p>
              <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Вернуться на главную
              </a>
            </div>
          </div>
        </body>
    );
  }