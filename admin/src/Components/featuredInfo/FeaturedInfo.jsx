import React from 'react'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import './FeaturedInfo.css'


const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featureditem">
    <span className="featuredTitle">Revanue</span>
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2.14</span>
        <span className="featuredMoneyRate">
            -11.14
            <ArrowDownward className='featuredIcon negative'/>
            </span>
    </div>
    <span className="featuredSub">Compared to last month </span>
        </div>
        <div className="featureditem">
    <span className="featuredTitle">Sales</span>
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">$7.04</span>
        <span className="featuredMoneyRate">
            -34.14
            <ArrowDownward className='featuredIcon negative'/>
            </span>
    </div>
    <span className="featuredSub">Compared to last month </span>
        </div>
        <div className="featureditem">
    <span className="featuredTitle">Cost</span>
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">$7.14</span>
        <span className="featuredMoneyRate">
            +11.14
            <ArrowUpward className='featuredIcon positive'/>
            </span>
    </div>
    <span className="featuredSub">Compared to last month </span>
        </div>
        </div>
  )
}

export default FeaturedInfo