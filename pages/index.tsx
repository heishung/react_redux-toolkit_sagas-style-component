import React from "react"
import { Layout } from "../components/templates"



type Props = {}

function Index(props: Props) {
  return (
    <Layout >


    </Layout>
  )
}

/**
 * @see https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 */
// Index.getInitialProps = async (ctx: AppContext): Promise<Props> => {
//   const { store } = ctx
//   store.dispatch(
//     changePage({
//       id: Page.TOP.id,
//     })
//   )
//   return {}
// }

export default Index
