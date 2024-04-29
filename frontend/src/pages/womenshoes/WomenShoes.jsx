import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const WomenShoes = () => {
    const [womenProducts, setWomenProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = async () => {
                const response = await fetch('/womenshoes');
                const data = await response.json();
                setWomenProducts(data);
                setLoading(false);
            }
            fetchProducts();
        }, 1000);
    }, [])
    return (
        <div>
            {loading ? <span className="loading loading-bars loading-lg mx-[10rem] sm:mx-[21rem] lg:mx-[45rem] h-[80vh]"></span> :
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:max-w-[80rem] p-4 mx-auto gap-4'>
                {womenProducts.map((product) => {
                    return (
                        <div key={product._id} className='card'>
                            <Link to={`/womenshoes/${product._id}`}>
                                <img className='lg:max-w-[280px] mx-auto rounded-xl cursor-pointer' src={product.image} alt={product.brand} />
                            </Link>
                            <div className='font-bold py-4 px-2'>
                                <h1 className='text-xl'>{product.name}</h1>
                                <h2 className='text-green-500'>${product.price}</h2>
                            </div>
                        </div>
                    )
                })}  
            </div> }
        </div>
    )
}

export default WomenShoes
