import React, { useEffect, useMemo, useReducer, useState } from 'react'
import style from "./index.module.css";
import useFetch from "./../../Hooks/useFetch";
import { useWishlist } from '../../context/WishlistContext';

function Reducer(state, action) {
    switch (action.type) {
        case '1x3':
            return {
                positioning: `'grid1'
                                 'grid2'
                                 'grid3'`, dataPerPage: action.payload, isOneCol: action.isOneCol
            }
        case '2x3':
            return {
                positioning: `'grid1 grid2'
                                 'grid3 grid4'
                                 'grid5 grid6'`, dataPerPage: action.payload, isOneCol: action.isOneCol
            }
        case '3x3':
            return {
                positioning: `'grid1 grid2 grid3'
                                 'grid4 grid5 grid6'
                                 'grid7 grid8 grid9'`, dataPerPage: action.payload, isOneCol: action.isOneCol
            }
        case '4x3':
            return {
                positioning: `'grid1 grid2 grid3 grid4'
                                 'grid5 grid6 grid7 grid8'
                                 'grid9 grid10 grid11 grid12'`, dataPerPage: action.payload, isOneCol: action.isOneCol
            }

        default:
            return state
    }
}

function ShopSection() {

    const {wishlist, addToWishlist} = useWishlist()

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' })
    const [state, dispatch] = useReducer(Reducer, {
        positioning: `'grid1 grid2 grid3'
                                                                 'grid4 grid5 grid6'
                                                                 'grid7 grid8 grid9'`, dataPerPage: 9, isOneCol: false
    })
    const [category, setCategory] = useState({ 'dresses': '', 'tShirts': '', 'bags': '', 'jackets': '', 'shoes': '', 'jumpers': '', 'jeans': '', 'sportwears': '' })
    const [size, setSize] = useState({ 'xs': '', 's': '', 'm': '', 'l': '', 'xl': '', 'xxl': '' })
    const [color, setColor] = useState({ 'cream': '', 'yellow': '', 'gray': '', 'blue': '', 'red': '', 'green': '', 'magenta': '', 'black': '' })
    const [brand, setBrand] = useState({ 'next': '', 'riverIsland': '', 'Geox': '', 'newBalance': '', 'ugg': '', 'ff': '', 'nike': '' })


    const baseURL = 'http://localhost:3000/products'

    useEffect(() => {
        useFetch(baseURL, setData)
    }, [])


    // Not Ready
    const handleCheck = (e) => {
        if (e.checked) {
            console.log(e.id);
            switch (e.parentElement.parentElement.id) {
                case 'category':
                    setCategory({...category, '`${e.id}`':'`${e.id}`' })
                    return
                case 'size':

                    return
                case 'color':

                    return
                case 'brand':

                    return

                default:
                    return
            }
        }
        checkBoxes[e.parentElement.parentElement.id][e.id] = ''
        console.log(filteredData);
    }

    const sortData = useMemo(() => {
        let sortableDatas = [...data]
        if (sortConfig.key) {
            sortableDatas.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'descending' ? 1 : -1
                }
                return 0;
            })
        }
        return sortableDatas
    }, [data, sortConfig])


    const filteredData = useMemo(() => sortData.filter(item => item.category.toLowerCase().includes(category.dresses)), [data,category])

    const lastPageIndex = Math.ceil(filteredData.length / state.dataPerPage)

    let pageNumbers = []
    for (let i = 1; i <= lastPageIndex; i++) {
        pageNumbers.push(i)
    }

    const lastElementIndex = currentPage * state.dataPerPage
    const firstElementIndex = lastElementIndex - state.dataPerPage

    const PageDatas = filteredData.slice(firstElementIndex, lastElementIndex)

    const productsStyle = {
        margin: '20px auto',
        display: 'grid',
        gap: '10px',
        gridTemplateAreas: state.positioning
    }

    const cardStyle1 = {
        padding: '0 10px',
        width: '222.75px',
        height: '330.35px',
        position: 'relative'
    }

    const cardStyle2 = {
        display: 'flex',
        alignItems: 'center',
        columnGap: '20px',
        paddingBottom: '20px',
        marginBottom: '20px',
        width: '871px',
        height: '222.75px',
        position: 'relative'
    }

    function OneByThree() {
        dispatch({ type: '1x3', payload: 3, isOneCol: true })
    }


    function TwoByThree() {
        dispatch({ type: '2x3', payload: 6, isOneCol: false })
    }


    function ThreeByThree() {
        dispatch({ type: '3x3', payload: 9, isOneCol: false })
    }


    function FourByThree() {
        dispatch({ type: '4x3', payload: 12, isOneCol: false })
    }

    function addWishlist(item) {
        addToWishlist(item)
        item.isAdded= !item.isAdded ? true : false
    }

    function addClass(item) {
        item.mouseOver=true
    }

    function removeClass(item) {
        item.mouseOver=false
    }

    return (
        <section>

            <div className={style.container}>

                <div className={`${style.filterContainer}`}>
                    <div className={style.filtersHead}>
                        <span className={style.headTitle}>Filters:</span>
                        <a className={style.headClean}>Clean All</a>
                    </div>

                    <div className={style.filters}>
                        <div className="filterCategoryBox">
                            <div className={style.filterBox}>
                                <h4 className={style.filterTitle}>Category<i className="fa-solid fa-angle-down"></i></h4>

                                <div className={style.filter} id='category'>

                                    <label htmlFor="Dresses"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Dresses" id="dresses" />Dresses</label>

                                    <label htmlFor="T-shirts"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="T-shirts" id="tshirts" />T-shirts</label>

                                    <label htmlFor="Bags"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Bags" id="bags" />Bags</label>

                                    <label htmlFor="Jackets"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Jackets" id="jackets" />Jackets</label>

                                    <label htmlFor="Shoes"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Shoes" id="shoes" />Shoes</label>

                                    <label htmlFor="Jumpers"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Jumpers" id="jumpers" />Jumpers</label>

                                    <label htmlFor="Jeans"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Jeans" id="jeans" />Jeans</label>

                                    <label htmlFor="Sportwear"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Sportwear" id="sportwear" />Sportwear</label>
                                </div>

                            </div>
                        </div>
                        <div className="filterSizeBox">
                            <div className={style.filterBox}>
                                <h4 className={style.filterTitle}>Size<i className="fa-solid fa-angle-down"></i></h4>

                                <div className={style.filter} id='size'>

                                    <label htmlFor="XS"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="XS" id="xs" />XS</label>

                                    <label htmlFor="S"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="S" id="s" />S</label>

                                    <label htmlFor="M"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="M" id="m" />M</label>

                                    <label htmlFor="L"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="L" id="l" />L</label>

                                    <label htmlFor="Xl"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="XL" id="xl" />XL</label>

                                    <label htmlFor="XXl"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="XXL" id="xxl" />XXL</label>
                                </div>

                            </div>
                        </div>
                        <div className="filterColorBox">
                            <div className={style.filterBox}>
                                <h4 className={style.filterTitle}>Color<i className="fa-solid fa-angle-down"></i></h4>

                                <div className={style.filter} id='color'>

                                    <label htmlFor="Cream"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Cream" id="cream" />Cream</label>

                                    <label htmlFor="Yellow"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Yellow" id="yellow" />Yellow</label>

                                    <label htmlFor="Gray"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Gray" id="gray" />Gray</label>

                                    <label htmlFor="Red"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Red" id="red" />Red</label>

                                    <label htmlFor="Blue"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Blue" id="blue" />Blue</label>

                                    <label htmlFor="Green"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Green" id="green" />Green</label>

                                    <label htmlFor="Magenta"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Magenta" id="magenta" />Magenta</label>

                                    <label htmlFor="Black"><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Black" id="black" />Black</label>

                                </div>

                            </div>
                        </div>
                        <div className="filterBrandBox">
                            <div className={style.filterBox}>
                                <h4 className={style.filterTitle}>Brand<i className="fa-solid fa-angle-down"></i></h4>

                                <div className={style.filter} id='brand'>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Next" id="next" />Next</label>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="River Island" id="riverisland" />River Island</label>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Geox" id="geox" />Geox</label>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="New Balance" id="newbalance" />New Balance</label>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="UGG" id="ugg" />UGG</label>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="F&F" id="ff" />F&F</label>

                                    <label htmlFor=""><input onChange={(e) => handleCheck(e.target)} type="checkbox" name="Nike" id="nike" />Nike</label>

                                </div>

                            </div>
                        </div>
                        <div className="filterPriceBox">
                            <div className={style.filterBox}>
                                <h4 className={style.filterTitle} id='price'>Price<i className="fa-solid fa-angle-down"></i></h4>

                                <div className={style.filter}></div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className={style.disFlexFDCol}>
                    <div className={style.disFlexSB}>
                        <div className="headL">
                            <span>Showing {lastElementIndex - firstElementIndex} of {filteredData.length} Products</span>
                        </div>
                        <div className={style.headR}>
                            <span>Sort By: </span>
                            <select name="sortBy" id="sortBy">
                                <option value="Most Popular">Most Popular</option>
                                <option value="Most Related">Most Related</option>
                                <option value="Date">Date</option>
                            </select>
                            <div className={style.gridPositions}>
                                <svg onClick={OneByThree} className={style.pointer} width="16" height="16">
                                    <rect fill='white' x="0" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="0" width="10" height="4"></rect>
                                    <rect fill='white' x="0" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="6" width="10" height="4"></rect>
                                    <rect fill='white' x="0" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="12" width="10" height="4"></rect>
                                </svg>
                                <svg onClick={TwoByThree} className={style.pointer} width="12" height="16">
                                    <rect fill='white' x="0" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="0" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="0" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="12" width="4" height="4"></rect>
                                </svg>
                                <svg onClick={ThreeByThree} className={style.pointer} width="16" height="16">
                                    <rect fill='white' x="0" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="12" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="0" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="12" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="0" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="12" y="12" width="4" height="4"></rect>
                                </svg>
                                <svg onClick={FourByThree} className={style.pointer} width="22" height="16">
                                    <rect fill='white' x="0" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="12" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="18" y="0" width="4" height="4"></rect>
                                    <rect fill='white' x="0" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="12" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="18" y="6" width="4" height="4"></rect>
                                    <rect fill='white' x="0" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="6" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="12" y="12" width="4" height="4"></rect>
                                    <rect fill='white' x="18" y="12" width="4" height="4"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={productsStyle} name='products'>
                        {PageDatas && PageDatas.map((product) => (
                            <div key={product.id} style={state.isOneCol ? cardStyle2 : cardStyle1} >
                                <div className={style.imgContainer}>
                                    <img src={product.img} alt="" className={style.img} />
                                </div>
                                <div className={style.addTo}>
                                    <div className={style.addWishlist} onClick={()=>addWishlist(product)}><i className={`fa-${product.isAdded ? 'solid' : 'regular'} fa-heart`} onMouseEnter={()=>addClass(product)}></i></div>
                                </div>
                                <div className={style.productTextBox}>
                                    <span className="productBrand">{product.brand}</span>
                                    <h4 className='productName'>{product.name}</h4>
                                    <span>{product.category}</span>
                                    <span className='productPrice'>${product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={style.paginationContainer}>
                        <button className={style.prevnext} onClick={() => setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage)}><i className="fa-solid fa-arrow-left-long"></i> Prev</button>
                        {pageNumbers && pageNumbers.map((page) => (

                            <button key={page} onClick={() => setCurrentPage(page)} className={style.paginationBtn} >{page}</button>

                        ))}
                        <button className={style.prevnext} onClick={() => setCurrentPage(currentPage !== lastPageIndex ? currentPage + 1 : currentPage)}>Next <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ShopSection