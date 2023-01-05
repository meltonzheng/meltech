import { c as create_ssr_component, d as add_attribute } from './index-5c0598d4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgUrl = new URL("../images/Melton.jpg", import.meta.url).href;
  return `<div><div class="${"flex bg-gray-600 p-10 pl-20"}">
        <img${add_attribute("src", imgUrl, 0)} alt="${"Picture of Melton Zheng"}" class="${"shrink border rounded-xl h-80"}">
        <div class="${"pl-10 text-white text-lg"}"><p>Hi everyone! My name is Melton Zheng, and this is my profolio website. I built this by using
            </p>
            <br>
            <ol class="${"list-decimal indent-10 list-inside"}"><li>Framework: Svelte
                </li>
                <li>Style: Tailwind CSS
                </li>
                <li>Server: Old computer &amp; Ubuntu
                </li>
                <li>Domain: Namecheap
                </li>
                <li>Web Server: Nginx
                </li></ol>
            <br>
            <p>And I am currently looking for work!
            </p>
            <br><p>If you have or know of any opportunities, please email me @ <a href="${"mailto:meltonzheng@gmail.com"}" class="${"hover:text-black "}">meltonzheng@gmail.com</a></p>
            <br>
            <p>Thanks!
            </p>
            <br></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f1ba90f7.js.map
