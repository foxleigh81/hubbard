import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

type Props = {
  children?: ReactNode
  title?: string
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.GRAPHLQL_ENDPOINT
});

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <ApolloProvider client={client}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </ApolloProvider>
)

export default Layout
