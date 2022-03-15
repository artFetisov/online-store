import { Carousel, Image } from 'react-bootstrap'

export const CarouselBar = () => {
  function importAll(r) {
    return r.keys().map(r)
  }
  const promoImg = importAll(require.context('../assets/promo_images', false, /\.(png|jpe?g|svg)$/))

  return (
    <Carousel>
      {promoImg.map((img) => {
        return (
          <Carousel.Item key={img.default}>
            <Image className="d-block w-100" rounded src={img.default} />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
