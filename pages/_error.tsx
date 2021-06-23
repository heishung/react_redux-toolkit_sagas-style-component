import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Result } from 'antd';
import React from "react";
import { AppContext } from "../components/AppContext";
import { Layout } from "../components/templates";

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {
  statusCode?: number
}

/**
 * Error page
 * @see https://nextjs.org/docs/advanced-features/custom-error-page#500-page
 */
function Error(props: Props) {
  const { statusCode }: any = props
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <Result
        status={statusCode}
        title={statusCode}
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </Layout>
  )
}

Error.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { err, res } = ctx
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
