import './index.css'
import React from 'react'
import  { useState } from 'react'
import { useEffect } from 'react'
import {AiFillSetting , AiOutlineTwitter} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import { TailSpin } from 'react-loader-spinner'
import {SiFlipkart} from 'react-icons/si'


export default function Navbar1() {

  const [msg , setMsg] = useState(false)
  const [InputData , setInputData] = useState("")
  const result = msg ?  ' search_box' : null
  const [onclick , setonclick] = useState(true)

  const [arr , setArr] = useState([])
  const [initialdata , setInitialdata] = useState(50)
  const [isloading , setIsloading] = useState(false)

  const [order , setorder] = useState('ASC')

  const viewcmore = arr.slice(0 , initialdata)

  const new_array = viewcmore.filter((each1)=>each1.name.toLowerCase().includes(InputData))
  console.log(new_array)

  const onButton = ()=>{
     setMsg( prevstate =>{
      return !prevstate
     })
  }

 console.log(msg)


 const onInput = (e)=>{
    setInputData(e.target.value)
 }

 //console.log(InputData)


 useEffect(
    ()=>{
     FetchserData()
     
     
    }, [])



    const sorting = (col)=>{

        console.log("hi")
          if(order === "ASC"){
            const sorted = arr.sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setArr(sorted)
            setorder('DSC')
          }
    
    
          if(order === "DSC"){
            const sorted = [...arr].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setArr(sorted)
            setorder('ASC')
          }
    
          setonclick((prevState)=>{
            return !prevState
          })
       }




       const sorting1 = (id)=>{
        if(order === "ASC"){
            const sorted = arr.sort((a,b)=>
            a[id] - b[id]
            )
            setArr(sorted)
            setorder('DSC')
          }
    
    
          if(order === "DSC"){
            const sorted = [...arr].sort((a,b)=>
            b[id] - a[id]
            )
            setArr(sorted)
            setorder('ASC')
          }
    
          setonclick((prevState)=>{
            return !prevState
          })
    
       }
 

const FetchserData = async()=>{
setIsloading(true)
const Data =  await  fetch('https://api.coincap.io/v2/assets')
const NewData = await Data.json()

setArr(NewData.data)
setIsloading(false)


}



const viewmore = ()=>{
    setIsloading(true)
    setInitialdata(initialdata + initialdata)
    setTimeout(
        ()=>{
         setIsloading(false)
        } , 3000
    )
 }


  return (
    <div>
        <div>
            <nav className='nav_bar'>
            <ul>
                <li>Coins</li>
                <li>Exchange</li>
                <li>Charts</li>
                <li>Swap</li>
            </ul>
            <div>
                <img src="https://coincap.io/static/logos/black.svg" alt="coins_image"  className='hearder_image1'/>
            </div>
            <div className='searh_bar_container'>
                <div className={` ${result}`}>
                    <input type="text"   className='searchText' onChange={onInput} value={InputData}/>
                    <button onClick={()=> onButton()} className="b1">
                        <FaSearch size={'1.5em'}   />
                    </button>
                </div>
                <AiFillSetting  size={'1.5em'}/>
                <div className='wallet_color'>Connect wallet</div>
            </div>
            
        </nav> 
        </div>
        <div>
            <div className='background_color'>
            <div className="gradient_container">
                <ul className="ul_container">
                    <li className='li'>MARKET CAP <br /> $1.07T</li>
                    <li className='li'>EXCHANGE VOL <br />$40.97B</li>
                    <li className='li'>ASSETS <br />2,295</li>
                    <li className='li'>EXCHANGES <br />73</li>
                    <li className='li'>MARKETS <br />12,563</li>
                    <li className='li'>BTC DOM INDEX <br />32.7%</li>
                </ul>
            </div>
            <div className='shadow_container'>  
                <div className="table-container" style={{padding:"20px"}}>
                        <table>
                            <thead>
                                <tr>
                                <th style={{borderTopLeftRadius: "12px" }} onClick={()=> sorting1("rank")}>
								<span>Rank</span>
                                    {onclick ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                        </svg>)}
							       </th>
                                    <th  onClick={()=> sorting("name")}>
                                        <span>Name</span>
                                        {onclick ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                            </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg>)}
                               
							        </th>
                                    <th>
                                        <span>Price</span>
                                    </th>
                                    <th>
                                        <span>Market Cap</span>
                                    </th>

                                    <th>
                                        <span>VWAP(24Hr)</span>
                                    </th>
                                    <th>
                                        <span>Supply</span>
                                    </th>

                                    <th>
                                        <span>Volume (24Hr)</span>
                                    </th>

                                    <th style={{borderTopRightRadius: "12px"}} >
                                        <span>Change(24Hr)</span>
                                    </th>
                                </tr>
                            
                            </thead>
                            <tbody>
                                {new_array.map((coins)=> {
                                    const {priceUsd, marketCapUsd,vwap24Hr,supply,volumeUsd24Hr,changePercent24Hr} = coins
                                
                                    


                                    return(
                            
                                        <tr className='tr'>
                                            <td style={{marginLeft:"10px"}}>{coins.rank}</td>
                                            <td className='img_name'>{<img alt={coins.id} className="img_height_width" src={`https://assets.coincap.io/assets/icons/${coins.symbol.toLowerCase()}@2x.png`} />}<span className='symbol_container'>{coins.name}<br/><p className='symbol_image_coin'>{coins.symbol}</p></span></td>
                                            <td>{`$ ${Math.floor(priceUsd)}`}</td>
                                            <td>{`$ ${Math.floor(marketCapUsd)}`}</td>
                                            <td>{`$ ${Math.floor(vwap24Hr)}`}</td>
                                            <td>{`$ ${Math.floor(supply)}`}</td>
                                            <td>{`$ ${Math.floor(volumeUsd24Hr)}`}</td>
                                            <td className='percent_change'>{`$ ${Math.floor(changePercent24Hr)}`}</td> 
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                <button className='View_more' onClick={()=>viewmore()}>
                {isloading && <TailSpin
                        height="30"
                        width="30"
                        color="white"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />
                    }

                    {!isloading && <span>View More</span>}
                    </button>

            </div>
            
        </div>
            
        </div>
        <footer className='footer_container c1'>
            <div className='footer_part1'>
                <span style={{fontSize:"24px" , fontWeight:"600" , marginBottom:"12px"}} >COINCAP.IO</span><br/>
                <span style={{color:"gray" ,fontSize:"18px"}} >Support</span><br/>
                <span style={{color:"gray" ,fontSize:"18px"}} >Our API</span><br/>
                <span style={{color:"gray" ,fontSize:"18px"}} > Rate Comparison</span><br/>
                <span style={{color:"gray" ,fontSize:"18px"}} >Careers</span><br/>
            </div>

            <div className='footer_part1 part2'>
                <span style={{color:'white',fontSize:"24px" , fontWeight:"600" , marginBottom:"18px"}} class="span1">LEGALS</span><br/>
                <span style={{color:"gray" ,fontSize:"18px" , paddingTop:"20px"}}>
                    Terms of Service
                </span><br/>
                <span style={{color:"gray" ,fontSize:"18px" , paddingTop:"20px", lineHeight:"0.5px"}} class="span1">Privacy Police</span><br/>
                <span style={{color:'white',fontSize:"24px" , fontWeight:"600" , marginTop:"20px"}} class="span1">DISCLAIMER</span><br/>
                <span  style={{color:"gray" ,fontSize:"18px" , paddingTop:"20px"}} class="span1">Neither ShapeShift AG nor  CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</span>
            </div>
            <div className='footer_part1 '>
                <span style={{color:'white',fontSize:"24px" , fontWeight:"600" , marginBottom:"18px"}}>FOLLOW US</span>
                <span>
                    <AiOutlineTwitter size={'3em'} color="white" paddingTop="0px"/>
                    <SiFlipkart size={'2.5em'} color="white"/>
                </span>
            </div>
            <div className='footer_part1'>
                <span style={{fontSize:"24px" , fontWeight:"600" , marginBottom:"12px"}}>COINCAP APP AVAILABLE ON</span>
                <a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap">
                    <img src="https://coincap.io/static/images/stores/google_play.svg" alt="google_playstore" className='image_google' />
                </a>
                <a href="https://apps.apple.com/us/app/coincap/id1074052280?ign-mpt=uo%3D4">
                <img src="https://coincap.io/static/images/stores/apple_store.svg" alt="apple_store" className='image_google' />
                </a>
            </div>
        </footer>
    </div>
  )
}
