import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appCss from '@/index.css?url'
import Noise from '@/components/Noise'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: 'NightlyDev — Full-Stack Developer' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://cdn.fontshare.com', crossOrigin: 'anonymous' },
      {
        rel: 'preload',
        href: 'https://cdn.fontshare.com/wf/TLLFHOEQ6HZNXIRGXNTZUSDWI54K3ZOG/GCTHXIDYQODDAWD6XSRPNXFRJ3GWYWDB/EB5XKUIIJJKWYJCOFYLJ3MXWCETTVBIR.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: 'https://cdn.fontshare.com/wf/TLLFHOEQ6HZNXIRGXNTZUSDWI54K3ZOG/GUY5XQIBLV72BJBTRMO6F5LXPZQX5RNO/MVDQMRXV6WNKTBBNFKMG2JVKBLXNXRRV.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="min-h-screen bg-background text-foreground relative">
          <Noise />
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
