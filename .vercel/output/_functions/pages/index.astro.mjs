import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CVey9BWP.mjs';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_DLq4oBam.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/alex/Documents/mike_flores/src/layouts/Layout.astro", undefined);

const MetaGeneralLogo = new Proxy({"src":"/_astro/MetaGeneralLogo.1o-QuGQN.svg","width":117,"height":117,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alex/Documents/mike_flores/src/assets/MetaGeneralLogo.svg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-zinc-200"> <div class="flex flex-col items-center justify-center gap-4 pt-5 max-w-[600px] mx-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-[90px]", "src": MetaGeneralLogo, "alt": "Logo de meta" })} <h1 class="text-center text-8xl max-[425px]:text-6xl font-bold">Mike Flores</h1> <p class="text-zinc-500 text-5xl max-[425px]:text-3xl text-center font-light">Dashboard de anuncios pautados en Meta</p> </div> <section> ${renderComponent($$result2, "GeneralLabels", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/alex/Documents/mike_flores/src/components/GeneralLabels.tsx", "client:component-export": "default" })} </section> </main> ` })}`;
}, "/home/alex/Documents/mike_flores/src/pages/index.astro", undefined);

const $$file = "/home/alex/Documents/mike_flores/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
