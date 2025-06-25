import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h2 class="my-5">Flex Row:</h2>
  <div class="flex flex-row space-x-5 text-white ">
  <div class="p-5 bg-sky-500 rounded-xl">01</div>
  <div class="p-5 bg-sky-600 rounded-xl">02</div>
  <div class="p-5 bg-sky-700 rounded-xl">03</div>
  <div class="p-5 bg-sky-800 rounded-xl">04</div>
  <div class="p-5 bg-sky-900 rounded-xl">05</div>
</div>
<h2 class="my-5">Flex-end Row Reverse:</h2>
<div class="flex flex-row-reverse space-x-reverse space-x-5 text-white ">
<div class="p-5 bg-sky-500 rounded-xl">01</div>
<div class="p-5 bg-sky-600 rounded-xl">02</div>
<div class="p-5 bg-sky-700 rounded-xl">03</div>
<div class="p-5 bg-sky-800 rounded-xl">04</div>
<div class="p-5 bg-sky-900 rounded-xl">05</div>
</div>
<h2 class="my-5">Flex-center Row:</h2>
<div class="flex flex-row justify-center space-x-5 text-white">
<div class="p-5 bg-sky-500 rounded-xl">01</div>
<div class="p-5 bg-sky-600 rounded-xl">02</div>
<div class="p-5 bg-sky-700 rounded-xl">03</div>
<div class="p-5 bg-sky-800 rounded-xl">04</div>
<div class="p-5 bg-sky-900 rounded-xl">05</div>
</div>
<h2 class="my-5">basis-grow shrink</h2>
<div class="flex flex-row space-x-5 text-white ">
<div class="p-5 bg-sky-500 rounded-xl">01</div>
<div class="p-5 w-[200px] bg-sky-600 shrink-1 rounded-xl">flex shrink</div>
<div class="p-5 bg-sky-700 basis-md rounded-xl">basis md</div>
<div class="p-5 bg-sky-800 grow-1 rounded-xl">flex grow</div>
<div class="p-5 bg-sky-900 rounded-xl">05</div>
</div>
<br/><br/>
<h2 class="my-5">grid col</h2>
<div class="grid grid-cols-6 gap-4">
  <div class="col-span-4 col-start-2 p-5 bg-red-300">01</div>
  <div class="col-start-1 col-end-3 p-5 bg-red-300">02</div>
  <div class="col-span-2 col-end-7 p-5 bg-red-300">03</div>
  <div class="col-start-1 col-end-7 p-5 bg-red-300">04</div>
</div>
<h2 class="my-5">grid row</h2>
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 bg-green-600 p-5">row span 3</div>
  <div class="col-span-2 bg-green-600 p-5">col span 2</div>
  <div class="col-span-2 row-span-2 bg-green-600 p-5">col-span-2 row-span-2</div>
</div>
<h2 class="my-5">grid gallery</h2>
<div class=" p-10 flex items-center justify-center">
  <div class="grid grid-cols-3 gap-6 max-w-6xl w-full place-items-center">
    <div class="w-full h-40 rounded-xl bg-gradient-to-br from-pink-200 to-pink-400 text-white flex items-center justify-center text-3xl font-bold shadow hover:scale-105 transition-transform">
      1
    </div>
    <div class="w-full h-40 rounded-xl bg-gradient-to-br from-blue-200 to-blue-400 text-white flex items-center justify-center text-3xl font-bold shadow hover:scale-105 transition-transform">
      2
    </div>

    <div class="w-full h-40 rounded-xl bg-gradient-to-br from-green-200 to-green-400 text-white flex items-center justify-center text-3xl font-bold shadow hover:scale-105 transition-transform">
      3
    </div>

    <div class="w-full h-40 rounded-xl bg-gradient-to-br from-purple-200 to-purple-400 text-white flex items-center justify-center text-3xl font-bold shadow hover:scale-105 transition-transform">
      4
    </div>

    <div class="w-full h-40 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-400 text-white flex items-center justify-center text-3xl font-bold shadow hover:scale-105 transition-transform">
      5
    </div>

    <div class="w-full h-40 rounded-xl bg-gradient-to-br from-teal-200 to-teal-400 text-white flex items-center justify-center text-3xl font-bold shadow hover:scale-105 transition-transform">
      6
    </div>

  </div>
</div>
<h1 class="my-7 text-teal-600 font-black">Bckground Image</h1>
<div class="bg-[url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/twcomponents/tailwind-gradient-generator-thumbnail.webp)] bg-top bg-no-repeat bg-contain w-full h-screen"></div>

`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
