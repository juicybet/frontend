import Head from "next/head"
import React from "react"
import { getTitle, getDescription, getFavicon } from "../../state/site"

export const Meta = () => {
  return (
    <Head>
      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
      <link rel="icon" href={getFavicon()} />
      <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no" />
    </Head>
  )
}
