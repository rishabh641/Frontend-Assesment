import React,{useState,useEffect} from 'react'
import {db} from './Firebase/config.js'
import rent from './Css/rent.module.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { collection, getDocs, doc,deleteDoc } from "firebase/firestore"
import Item from './Item.js';
import calender from './others/calendar.png'


const Rent=()=>{
    const Ref = collection(db,"Rent");
    const [rentdata,setRent]=useState([]);
    const [search,setSearch]=useState('');
    const [selLocation,setSelLocation]=useState(null)
    const [location,setLocation]=useState([]);
    const [date,setDate]=useState('');
    const [lowPrice,setLowPrice]=useState(0);
    const [highPrice,setHighPrice]=useState(0);
    const [mp,setMp]=useState([]);
    const [propertyType,setPropertyType]=useState(null);
    const [selDate,setSelDate]=useState(null)


    var month=new Map()

    month.set('Jan', '01');
    month.set('Feb', '02');
    month.set('Mar', '03');
    month.set('Apr', '04');
    month.set('May', '05');
    month.set('Jun', '06');
    month.set('Jul', '07');
    month.set('Aug', '08');
    month.set('Ser', '09');
    month.set('Oct', '10');
    month.set('Nov', '11');
    month.set('Dec', '12');

    function check(loc,housedate,price,Property_type){
        var ok=1;
        if(selLocation&&selLocation!==loc)
        {
            ok=0;
        }
        if(date&&date.localeCompare(housedate)!==-1 )
        {
            ok=0;
        }
        if(highPrice&&(lowPrice>price||highPrice<price) )
        {
            ok=0;
        }
        if(propertyType&&propertyType!==Property_type)
        {
            ok=0;
        }
        if(ok===0)
        {
            return false;
        }
        else{
            return true;
        }
    }
    

    useEffect(()=>{
        var temp=[];
        for (let i=0;i<=10000;i+=1000)
        {
            var temp1=[...temp,{first:i,second:i+1000,'id':i}];
            temp=temp1;
        }

        const AllUniqueLocations=(temp)=>{
            var g=[];
            temp.map((e)=>{
                var temp1=[...g,e.Location]
                g=temp1;
            })
            var unique=new Set(g);
            temp=[];
            for (var it = unique.values(), val= null; val=it.next().value; ) {
                var temp1=[...temp,{val:val}];
                temp=temp1;
            }
            setLocation(temp);
        }
        
        const getRent = async() => {
            const data = await getDocs(Ref);
            const temp=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
            AllUniqueLocations(temp)
            setRent(temp);
        }
        setMp(temp);
        getRent();

    },[])


    return (
    <div className={rent.wrapper}>

        {/* search by name */}
        <div className={rent.sContainer}>
            <h1 className={rent.sHeading}>Search properties to Rent</h1>
            <input type='search' value={search} className={rent.search} placeholder='Search with Search Bar' onChange={(e)=>{setSearch(e.target.value)}} />
        </div>

        {/* filters */}
        <div className={rent.fContainer}>
        <div className={rent.flabel}>
            <label style={{display:'block'}}>Location</label>
            <select onChange={(e)=>{
                setSelLocation(e.target.value)
            }} className={rent.field}>

                <option val=''>Select Option</option>
                {
                    location.map((e)=>{
                        console.log(e.val)
                    return(
                        <option value={e.val}>{e.val}</option>
                    )
                })
                }
            </select>
        </div>

        <div className={rent.flabel}>
            <label style={{display:'block'}}>When</label>
            <div style={{display:'inline-flex'}}>
            <DatePicker selected={selDate} onChange={(e)=>{
                var s=e.toString().split(' ')
                var ans='';
                ans=ans+s[3];
                ans=ans+'-'
                ans=ans+month.get(s[1]);
                ans=ans+'-';
                ans=ans+s[2];
                setDate(ans);
                setSelDate(e)
            }} className={rent.field}

            placeholder="Select Move-In Date"
            />
            <img src={calender} className={rent.icon}/>
            </div>
        </div>
        {
            console.log(typeof(lowPrice))
        }

        <div className={rent.flabel}>
            <label style={{display:'block'}} >Price</label>
            <select onChange={(e)=>{
                var sel=e.target.value;
                sel=sel.split(',')
                console.log(typeof(parseInt(sel[1])))
                setHighPrice(parseInt(sel[1]));
                setLowPrice(parseInt(sel[0]));
            }} className={rent.field}>

                <option value={[0,0]}>Select Option</option>
                {
                    mp.map((e)=>{
                        return (
                            <option value={[parseInt(e.first),parseInt(e.second)]}>${e.first}-${e.second}</option>
                        )
                    })
                }
            </select>
        </div>

        <div className={rent.flabel}>
            <label style={{display:'block'}} >Property Type</label>
            <select onChange={
                (e)=>{
                    setPropertyType(e.target.value)
                }
            } className={rent.field}>
                <option value=''>Select Option</option>
                <option value='Houses'>Houses</option>
                <option value="Villas">Villas</option>
                <option value="Flats">Flats</option>
            </select>
        </div>
        </div>

        {/* items */}
        <div style={{width:'70vw',marginLeft:'auto',marginRight:'auto' }}>
        {
            rentdata.map((ele)=>{
                    console.log(ele.Select_Move.toString())
                    if(check(ele.Location,ele.Select_Move,ele.Price,ele.Property_type))
                    {
                        return <Item name={ele.Name} price={ele.Price} Address={ele.Address} Bedrooms={ele.Bedrooms}
                    Bathrooms={ele.Bathrooms} Area={ele.Area} Image={ele.Image}/>
                    }
                    else
                    {
                        return <></>
                    }
                })
        }
        </div>


    </div>)
}

export default Rent;