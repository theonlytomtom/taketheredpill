interface Env {
  BEEHIIV_API_KEY: string
  BEEHIIV_PUBLICATION_ID: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { email } = await context.request.json<{ email: string }>()

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${context.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${context.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      console.error('Beehiiv error:', err)
      return new Response(JSON.stringify({ error: 'Subscription failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
