import { Link } from "react-router"
import { useTranslation } from "react-i18next"

function Cart() {

  const { t } = useTranslation()

  return (
    <>
      <h1>{t('Cart.pageTitle')}</h1>

      <Link to="/">View Catalog</Link>

    </>
  )
}

export default Cart
