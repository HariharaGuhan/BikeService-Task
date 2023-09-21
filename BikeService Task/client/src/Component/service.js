import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import { FaTruckPickup } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
import { RiPriceTagFill } from "react-icons/ri";

export function Service() {
    return (<>
        <div className="servicescroll">&nbsp;</div>
        <div className="container p-5 text-white ">
            <h1>Service</h1>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <img id="myVideo" height="50%" width="100%"  src="https://thumbs.dreamstime.com/b/man-worker-car-wash-washing-s-alloy-wheels-48893850.jpg" />
                    
                </div>
                <div className="col-lg-6">
                    <div class="card servicevideo">
                        <div class="card-header" style={{color:"whitesmoke"}}>
                            Our Service
                        </div>
                        <div style={{color:"whitesmoke"}}class="card-body">
                            <h5 class="card-title">We provide good service</h5>
                            <p class="card-text">At our company, providing exceptional service is a top priority. Our dedicated team of professionals is committed to delivering the best experience possible to each and every one of our customers. From the moment you first contact us, you can expect a friendly and responsive approach that puts your needs first. We go above and beyond to ensure that you receive the right solutions, delivered in a timely and efficient manner. We believe that the key to building long-lasting relationships with our clients is through providing good service, and we take that responsibility seriously.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide mt-5" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="carousel1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="serviceImage" src="https://media.istockphoto.com/id/1051029946/photo/people-holding-hand-are-repairing-a-motorcycle.jpg?s=612x612&w=0&k=20&c=ZAdC5r-MzTHu6GfnOd-UxBZfYqTGMAlDMbQND6ktWVY=" />
                                </div>
                                <div className="col-lg-6 serviceContent">
                                    <div className="row">
                                        <div className="col-lg-5 serviceContent1">
                                            <FaTruckPickup className="icons"></FaTruckPickup>
                                            <p>Free Pickup Drop</p>
                                        </div>
                                        <div className="col-lg-1">&nbsp;</div>
                                        <div className="col-lg-5 serviceContent1">
                                            <AiFillSetting className="icons"></AiFillSetting>
                                            <p>Genuine Parts</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 serviceContent1">
                                            <SiAdguard className="icons"></SiAdguard>
                                            <p>30 Days Warranty</p>
                                        </div>
                                        <div className="col-lg-1">&nbsp;</div>
                                        <div className="col-lg-5 serviceContent1">
                                            <RiPriceTagFill className="icons"></RiPriceTagFill>
                                            <p>Affordable price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="carousel1">
                            <div className="row">
                                <div className="col-lg-6">
                                     <img className="serviceImage" src="https://images.pexels.com/photos/750841/pexels-photo-750841.jpeg?cs=srgb&dl=pexels-fox-750841.jpg&fm=jpg" /> 
                                </div>
                                <div className="col-lg-6">

                                    <div class="card service2card1">
                                        <div class="card-header">
                                            Our machanic
                                        </div>
                                        <div class="card-body bg-dark">
                                            <h5 class="card-title">We have a reliable mechanic</h5>
                                            <p class="card-text">Being a great mechanic involves more than identifying problems, repairing or replacing worn parts and knowing the difference between the camshaft and crankshaft. You’ve got to be able to deliver exceptional customer service. After all, people invest a lot of money in their automobiles, and they want to work with a mechanic who can put them at ease; they want to work with someone they can trust.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="carousel1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="serviceImage" src="https://5.imimg.com/data5/SELLER/Default/2023/6/315850583/CS/DI/WY/10979414/timing-gears-spare-parts-for-royal-enfield-standard-bullet-electra-machismo-thunderbird-250x250.jpg" />
                                </div>
                                <div className="col-lg-6">
                                    <div class="card service2card2">
                                        <div class="card-header">
                                            Our Spares
                                        </div>
                                        <div class="card-body bg-dark">
                                            <h5 class="card-title">Genuine spare parts</h5>
                                            <p class="card-text">Our company takes great pride in providing the best spare parts in the industry. We understand the importance of quality components for the proper functioning and longevity of your equipment. That's why we only source parts from reputable manufacturers with a proven track record of excellence. Our expert team of technicians carefully inspects each item to ensure it meets our high standards before being shipped to our customers. You can trust us to provide the reliable, high-quality spare parts you need to keep your operations running smoothly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </>);
}