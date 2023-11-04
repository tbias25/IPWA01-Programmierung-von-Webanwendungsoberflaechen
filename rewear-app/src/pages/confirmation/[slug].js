import { useRouter } from 'next/router'

/*
  https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
*/

export default function Confirmation() {
  const router = useRouter()
  return <p>Confirmation: {router.query.slug}</p>
}
