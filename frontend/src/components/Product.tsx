import { Card } from "react-bootstrap"
import Rating from "../components/Rating"
import { Link } from "react-router-dom"
import { ProductType } from "../actions/productActions"

const Product = (props: { product: ProductType }) => {
  const { product } = props
  return (
    <Link to={`/product/${product._id}`} className="nostyle">
      <Card className="my-3 p-3 rounded">
        <Card.Img src={product.image} variant="top" />
        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Product
