import Head from "next/head"
import React from "react"
import { usePage } from "../../hooks"



type Props = {
  children: React.ReactNode
  className?: string
}

export const Layout = function (props: Props) {
  const { children, className } = props
  const { selectedPage } = usePage()

  return (
    <section className={` ${className}`}>
      <Head>
        <title>{selectedPage.title}</title>
      </Head>

      <article>{children}</article>

    </section>
  )
}
