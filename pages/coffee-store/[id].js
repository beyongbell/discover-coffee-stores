import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
    Coffee Store Page {id}
    <Link href="/">Back to home </Link>
  </div>
  )
}

export default CoffeeStore
