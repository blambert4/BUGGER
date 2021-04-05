import Carousel from "react-bootstrap/Carousel"

function Home(){
    return(
        <div className = "k" id = "home" >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1706,w_3036,x_0,y_241/f_auto,q_auto,w_1100/v1554752078/shape/mentalfloss/istock-483749258.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bugs.uconn.edu/wp-content/uploads/sites/1135/2015/01/monarch-on-joe-pye-weed-650x413.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://d3ftz2d7w2w23usliis6r35c-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/potato-bug-980x735.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
</Carousel>
        </div>
    )
}
export default Home;