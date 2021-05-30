import axios from 'axios';
import { format, parseISO } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface LaunchProps {
  data: {
    name: string;
    details: string;
    rocket: string;
    date_utc: string;
  }
  type?: 'next' | 'upcoming' | 'latest'
}

interface Rocket {
  flickr_images: string[];
  name: string;
}

const Launch: React.FC<LaunchProps> = ({ data: { name, details, rocket, date_utc }, type = 'past' }) => {
  const [rocketData, setRocketData] = useState<Rocket | null>(null)

  const fetchRocket = useCallback(async (id) => {
    const {data} = await axios.get(`/api/rockets/${id}`)

    setRocketData(data)
  },[])

  useEffect(() => {
    fetchRocket(rocket)
  },[rocket])

  const launchLabel = useMemo(() => {
    switch (type) {
      case 'latest':
        return 'Latest Launch'
      case 'next':
        return 'Next Launch'
      case 'upcoming':
        return 'Upcoming'
      default:
        return null
    }
  }, [type])

  const formattedDate = useMemo(() => {
    return format(parseISO(date_utc), 'dd MMM yyyy HH:mm')
  }, [date_utc])

  return (
    <article className={`launch is-${type}`}>
      {launchLabel && <div className="launch-label" data-testid="label">
        {launchLabel}
      </div>}
      <div className="rocket" style={rocketData?.flickr_images[0] && { backgroundImage: `url(${rocketData?.flickr_images[0]})` }}>
        {rocketData && (
          <div className="rocket-name">
            <span>Rocket</span>
            <strong className="highlight">{rocketData.name}</strong>
          </div>
        )}
      </div>
      <div className="launch-details">
        <div className="launch-details-header">
          <div className="launch-name">
            <span>Name</span>
            <h2 className="highlight">{name}</h2>
          </div>
          <div className="launch-date">
            <span>Date</span>
            <strong className="highlight">{formattedDate}</strong>
          </div>
        </div>
        {type !== 'upcoming' && (
          <p className="launch-details-description" data-testid="details">{details}</p>
        )}
      </div>
    </article>
  );
}

export default Launch;
