// Pre-paint theme application. Rendered as the first child of <body> so the
// saved theme is set before first paint (no flash of incorrect theme).
// Also syncs the favicon to the active theme (white on dark, black on light).
export default function ThemeScript() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const js = `(function(){try{var d=localStorage.getItem('bs-site-dark')==='1';if(d){document.body.classList.add('dark');}var setIcon=function(){var dark=document.body.classList.contains('dark');var href='${base}/assets/rhino-'+(dark?'white':'black')+'.svg';var l=document.querySelector("link[rel='icon']");if(!l){l=document.createElement('link');l.rel='icon';l.type='image/svg+xml';document.head.appendChild(l);}l.href=href;};setIcon();window.__bsSetFavicon=setIcon;}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
