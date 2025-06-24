import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class=" w-100 flex flex-row justify-center items-center">
    <a href="https://vite.dev" target="_blank" class="">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    </div>
    <div>
    <h1 class="text-red-800 my-2 bg-amber-500">Vite + TypeScript</h1>
    <div class="my-5">
      <button class=" cursor-pointer text-mint-500 bg-black px-4 py-3 rounded-xl" id="counter" type="button"></button>
</div>
    <p class="read-the-docs bg-sky-100 m-8">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <h2 class="animate-bounce">test test</h2>
    <div class="card max-w-sm mx-auto my-10">
    <h3>🌌 Tailwind V4 Card</h3>
    <p>This card is styled using Tailwind's design tokens with CSS variables.</p>
    </div>
  </div>

    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
      🚀 The Future of Frontend: Tailwind and Beyond
    </h1>
    <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <img src="https://i.pravatar.cc/40" alt="Author" class="w-10 h-10 rounded-full" />
      <div>
        <p class="font-medium">Maher Al Rifai</p>
        <p>June 23, 2025 · 5 min read</p>
      </div>
    </div>


  <!-- Content -->
  <section class="space-y-6 leading-relaxed text-lg">
    <p>
      Frontend development is evolving fast. With tools like <span class="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span>, developers can create sleek, responsive designs without writing a single line of custom CSS.
    </p>

    <h2 class="text-2xl font-semibold border-l-4 pl-4 border-blue-500 dark:border-blue-400">
      🔥 Why Tailwind?
    </h2>
    <p>
      Tailwind’s utility-first approach allows for rapid development with consistent design patterns. It encourages component-based thinking and helps you stay in the flow.
    </p>

    <blockquote class="border-l-4 pl-4 italic text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700">
      “Tailwind is not just a CSS framework — it’s a mindset.”
    </blockquote>

    <h2 class="text-2xl font-semibold border-l-4 pl-4 border-purple-500 dark:border-purple-400">
      🛠 Features You’ll Love
    </h2>
    <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      <li>Built-in responsive utilities</li>
      <li>Dark mode ready</li>
      <li>Custom themes and tokens</li>
      <li>Just-in-Time compiler for performance</li>
    </ul>

    <div class="mt-6 flex flex-wrap gap-3">
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
        💡 Learn More
      </button>
      <button class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-medium border border-gray-300 dark:border-gray-600 transition">
        ⭐ Star on GitHub
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 text-sm flex justify-between items-center">
    <p>© 2025 Maher Al Rifai</p>
    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read More Articles →</a>
  </footer>



`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
