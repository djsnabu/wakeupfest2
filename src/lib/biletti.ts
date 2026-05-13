const BILETTI_UPCOMING_URL =
  'https://extra.biletti.fi/api/public/v1/organizer/events/upcoming'

export interface BilettiApiEvent {
  uuid: string | null
  name: string
  image: string
  description: string
  startTime: string | null
  endTime: string | null
  url: string
}

interface BilettiApiResponse {
  data: BilettiApiEvent[]
}

export interface BilettiEvent {
  id: string
  date: string
  time: string
  name: string
  description: string
  ticketUrl: string
  imageUrl?: string
}

function mapEvent(event: BilettiApiEvent): BilettiEvent {
  const start = event.startTime ? new Date(event.startTime) : null
  const date = start ? start.toISOString().slice(0, 10) : ''
  const time = start ? start.toISOString().slice(11, 16) : ''

  return {
    id: event.uuid ?? event.url,
    date,
    time,
    name: event.name,
    description: event.description,
    ticketUrl: event.url,
    imageUrl: event.image || undefined,
  }
}

export function isBilettiConfigured(): boolean {
  return Boolean(
    process.env.WAKEUPFEST_BILETTI_API_KEY?.trim() &&
      process.env.WAKEUPFEST_BILETTI_ORG_UUID?.trim()
  )
}

export async function getBilettiUpcomingEvents(): Promise<BilettiEvent[]> {
  const apiKey = process.env.WAKEUPFEST_BILETTI_API_KEY
  const orgUuid = process.env.WAKEUPFEST_BILETTI_ORG_UUID
  if (!apiKey?.trim() || !orgUuid?.trim()) {
    return []
  }

  try {
    const response = await fetch(BILETTI_UPCOMING_URL, {
      headers: {
        'X-Api-Key': apiKey.trim(),
        'X-Organizer': orgUuid.trim(),
      },
      next: { revalidate: 120 },
    })

    if (!response.ok) {
      console.error('Biletti events fetch failed', response.status, await response.text())
      return []
    }

    const body = (await response.json()) as BilettiApiResponse
    if (!Array.isArray(body.data)) {
      return []
    }

    return body.data.map(mapEvent).sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
  } catch (err) {
    console.error('Biletti events fetch error', err)
    return []
  }
}
