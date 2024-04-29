import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";

const MenShoesDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addProductToCart } = useContext(AppContext);

    useEffect(() => {
        setTimeout(() => {
            const fetchSingleProduct = async () => {
                const response = await fetch(`/menshoes/` + id);
                const data = await response.json();
                setProduct(data)
                setShoes(data.thumbnails)
                setLoading(false);
            }
            fetchSingleProduct();
        }, 1000)
    }, [id]);
    const clickImage = (index) => {
        setCurrentIndex(index)
    }
    return (
        <div>
            {loading ? <span className="loading loading-bars loading-lg   lg:mx-[45rem] h-[80vh]"></span> : 
                <div className="lg:flex lg:max-w-[70rem] mx-auto gap-10 p-4 pt-8">
                    <div>
                        <div>
                            <img className="lg:w-[370px]  rounded-xl" key={currentIndex} src={shoes[currentIndex]} alt={product.brand} />
                        </div>
                        <div className="hidden sm:flex w-[22rem] gap-2 pt-2">
                            {shoes.map((shoe,index) => {
                                return (
                                    <div key={index}>
                                        <img className="w-[15rem] cursor-pointer hover:opacity-50 mb-2 rounded-xl" onClick={()=>clickImage(index)} src={shoe} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </div> 
                    <div className="pt-10">
                        <h1 className="text-orange-500 font-bold tracking-[1rem] pb-4">SNEAKER SHOP</h1>
                        <h2 className="sm:text-4xl font-bold">{product.name}</h2>
                        <h2 className="leading-[2rem] py-8">{product.description}</h2>
                        <h2 className="font-bold">
                            <span>Price:</span> 
                            <span className="text-green-500 pl-2">${product.price}</span> 
                        </h2>

                        <div className="pt-6">
                            <div className="bg-[#ff7d1a] p-4 sm:py-3 rounded-xl sm:w-[13rem]">
                                <button className="flex items-center gap-4 mx-auto cursor-pointer" onClick={() => addProductToCart(product)}>
                                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fillRule="nonzero"/></svg>
                                    <h2 className="font-bold text-sm text-white">Add To Cart</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default MenShoesDetail
