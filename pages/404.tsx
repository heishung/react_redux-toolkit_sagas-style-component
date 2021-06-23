import { Button, Result } from 'antd'
import React, { useEffect } from "react"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { usePage } from "../hooks"



type Props = {}

/**
 * 404 Error page without getInitialProps(SSR)
 * @see https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-404-page
 * @see https://github.com/zeit/next.js/blob/master/errors/custom-error-no-custom-404.md
 */
function NotFoundError(props: Props) {
  const { changePage } = usePage()

  useEffect(() => {
    changePage(Page.ERROR.id)
  }, [])

  return (
    <Layout >
      <Result
        status={404}
        title={404}
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </Layout>
  )
}

export default NotFoundError
