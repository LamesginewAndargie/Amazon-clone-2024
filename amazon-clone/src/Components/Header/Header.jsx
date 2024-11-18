import React from "react";
import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
	return (
		<>
			<section>
				<div className={classes.header_container}>
					{/* logo section */}
					<div className={classes.logo_container}>
						<a href="#">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
								alt="amazon logo"
							/>
						</a>
						<div className={classes.delivery}>
							{/* delivery */}
							<span>
								<SlLocationPin />
							</span>
							<div>
								<p>Delivered to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>
					{/* search section */}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search Amazon" />
						<FaSearch size={25} />
					</div>
					{/* right side link */}
					<div className={classes.order_container}>
						<a href="#" className={classes.language}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
								alt="flag"
							/>
							<select>
								<option value="">EN</option>
							</select>
						</a>
						{/* three components */}
						<a href="">
							<div>
								<p>Hello, sign in</p>
								<span>Account & Lists</span>
							</div>
						</a>
						{/* orders */}
						<a href="">
							<p>Returns</p>
							<span>& Orders</span>
						</a>
						{/* cart */}
						<a href="" className={classes.cart}>
							<BiCart size={35} />
							<span>0</span>
						</a>
					</div>
				</div>
			</section>
			<LowerHeader />
		</>
	);
}

export default Header;
