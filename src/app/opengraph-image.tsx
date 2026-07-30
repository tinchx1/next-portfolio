import { ImageResponse } from 'next/og'

import { links } from '@/config'

export const runtime = 'edge'

export const alt = `${links.ownerFullName} — Software Engineer`
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const OpenGraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(145deg, #000319 0%, #0a0f2c 55%, #1a1040 100%)',
          padding: '64px 72px',
          color: '#e4ecff',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#c1c2d3'
          }}
        >
          Software Engineer
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1
            }}
          >
            {links.ownerFullName}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#b5b8d6',
              maxWidth: 900,
              lineHeight: 1.35
            }}
          >
            Transforming ideas into intelligent digital solutions
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#9ca0c4'
          }}
        >
          <span>Full Stack · Next.js · React</span>
          <span>Argentina</span>
        </div>
      </div>
    ),
    { ...size }
  )

export default OpenGraphImage
