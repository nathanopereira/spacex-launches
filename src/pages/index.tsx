import Head from 'next/head'

export default function Home() {
  return (
    <main className="container">
      <Head>
        <link rel="icon" type="image/x-icon" href="static/images/favicon.ico"/>
        <title>SpaceX Launches | by @nathanopereira</title>
      </Head>

      <div className="row">
        <div className="col-12">
          <h1>
            <img src="/spacex.svg" title="SpaceX"/>
            Launches
          </h1>
        </div>
      </div>
    </main>
  )
}
