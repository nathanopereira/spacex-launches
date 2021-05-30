import Launch from '@/components/Launch';
import axios from 'axios';
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'

interface ILaunch {
  name: string;
  id: string;
  details: string;
  rocket: string;
  date_utc: string;
}

interface PastLaunchesPaginationProps {
  hasNextPage: boolean;
  page: number;
}

export default function Home() {
  const [nextLaunch, setNextLaunch] = useState<ILaunch | null>(null)

  const [lastLaunch, setLastLaunch] = useState<ILaunch | null>(null)

  const [pastLaunches, setPastLaunches] = useState<ILaunch[]>([])
  const [pastLaunchesPagination, setPastLaunchesPagination] = useState<PastLaunchesPaginationProps>({ page: 1 } as PastLaunchesPaginationProps)

  const [upcomingLaunches, setUpcomingLaunches] = useState<ILaunch[]>([])
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(false)

  const fetchNextLaunch = useCallback(
    async () => {
      const {data} = await axios.get('/api/launches/next')

      setNextLaunch(data)
    },
    [],
  )

  const fetchUpcomingLaunches = useCallback(
    async () => {
      const {data:{docs}} = await axios.get('/api/launches/upcoming')

      setUpcomingLaunches(docs)
    },
    [],
  )

  const fetchLastLaunch = useCallback(
    async () => {
      const {data} = await axios.get('/api/launches/latest')

      setLastLaunch(data)
    },
    [],
  )

  const fetchPastLaunches = useCallback(
    async () => {
      const {data} = await axios.get('/api/launches/past', {params: {page: pastLaunchesPagination.page + 1}})

      const {docs, ...rest} = data

      setPastLaunches(prevState => [...prevState, ...docs])
      setPastLaunchesPagination(rest)
    },
    [pastLaunchesPagination],
  )

  useEffect(() => {
    fetchNextLaunch()
    fetchUpcomingLaunches()
    fetchLastLaunch()
    fetchPastLaunches()
  }, [])

  return (
    <main className="container">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <title>SpaceX Launches | by @nathanopereira</title>
      </Head>

      <div className="row">
        <header className="col-12 header-page">
          <h1 className="text-white text-center my-5">
            <img src="/spacex.svg" title="SpaceX" alt="SpaceX"/>
            <span className="d-block">Launches</span>
          </h1>
        </header>

        {upcomingLaunches.length > 0 && !showUpcomingLaunches && (
          <div className="col-12 col-md-10 mx-auto">
            <button type="button" onClick={() => setShowUpcomingLaunches(true)} className="button-show-upcoming" title="See upcoming launches">
              Upcoming Launches
            </button>
          </div>
        )}

        {upcomingLaunches.length > 0 && showUpcomingLaunches && (
          <div className="col-12 col-md-10 mx-auto">
            {upcomingLaunches.map(upcoming => (
              <Launch key={upcoming.id} data={upcoming} type="upcoming" />
            ))}
          </div>
        )}

        {nextLaunch && (
          <div className="col-12 col-md-11 mx-auto">
            <Launch data={nextLaunch} type="next" />
          </div>
        )}

        <div className="col-12 col-md-10 mx-auto">
          {lastLaunch && (
            <Launch data={lastLaunch} type="latest" />
          )}

          {pastLaunches.length > 0 && pastLaunches.map(past => (
            <Launch data={past} key={past.id} />
          ))}

          {pastLaunchesPagination.hasNextPage && (
            <button type="button" onClick={() => fetchPastLaunches()} className="button-show-more-launches" title="See more launches">
              See more launches
            </button>
          )}
        </div>
      </div>

      <footer className="text-center text-muted py-4 mt-5">
        <small>by <a target="_blank" href="https://github.com/nathanopereira/spacex-launches">nathanopereira</a> using <a target="_blank" href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a></small>
      </footer>
    </main>
  )
}
