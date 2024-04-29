import { useContext } from 'react'
import { AppContext } from '../AppContext'
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg";
import trash from "../images/trash-bin-minimalistic-svgrepo-com.svg"
const Cart = () => {
    const {
        cartItem,
        increaseQuantity,
        decreaseQuantity,
        removeProductFromCart
    } = useContext(AppContext);
    return (
        <div>
            {cartItem.length === 0
            ?
                <div className='p-4 py-[15rem] text-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>Your Cart is Empty! Add Product Please</h1>
                </div>
            :
                cartItem.map((item) => {
                    return (
                        <div key={item._id} className=' lg:flex gap-4 lg:w-[75rem] mx-auto bg-slate-100 my-4 p-4 rounded-xl shadow-lg'>
                            <img className='sm:w-[10rem] sm:h-[10rem] rounded-xl' src={item.image} alt={item.name} />
                            <div>
                                <div className='py-4'>
                                    <h3 className='font-bold text-2xl '>{item.name}</h3>
                                    <p className='font-bold  '>
                                        <span> price:</span>
                                        <span className='text-green-600'> $ {item.price}</span>
                                        <span className='px-2'>x</span>
                                        <span>{item.quantity}</span>
                                    </p>
                                    <h2 className='font-bold'>Total price: ${item.price * item.quantity}</h2>
                                </div>
                                <div className="sm:flex gap-4">
                                    <div className="bg-[#fffeee] sm:py-0 flex items-center justify-between p-4 mb-4 sm:mb-0 rounded-xl sm:mt-0 sm:gap-6 ">
                                        <div>
                                            <img
                                                className='cursor-pointer'
                                                onClick={() => decreaseQuantity(item._id)}
                                                src={minus}
                                                alt="minus icon"
                                            />
                                        </div>
                                        <h2 className="font-bold">{item.quantity}</h2>
                                        <div>
                                            <img
                                                className='cursor-pointer'
                                                onClick={() => increaseQuantity(item._id)}
                                                src={plus}
                                                alt="plus icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-[#ff7d1a] py-2 px-4 rounded-xl">
                                        <button className="flex items-center gap-1 mx-auto cursor-pointer" onClick={() => removeProductFromCart(item._id)}>
                                            <img className='w-[2rem]' src={trash} alt="trash icon" />
                                            <h2 className="font-bold text-sm text-white">remove</h2>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
