import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center space-y-6 w-80">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Counter App
      </h1>

      <p
        className="text-6xl font-bold text-blue-600 dark:text-blue-400"
        data-testid="count">
        {count}
      </p>

      <div className="flex justify-center gap-4">
        <button
          className="bg-green-400 hover:bg-green-400 text-white font-medium px-4 py-2 rounded-lg transition"
          onClick={() => setCount((c) => c + 1)}>
           Increase +
        </button>

        <button
          className="bg-red-400 hover:bg-red-400 text-white font-medium px-4 py-2 rounded-lg transition"
          onClick={() => setCount((c) => c - 1)}>
           Decrease –
        </button>
      </div>

      <button
        className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
        onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  );
}
