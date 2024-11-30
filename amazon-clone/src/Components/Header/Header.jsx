import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
function Header() {
	const [{ basket }, dispatch] = useContext(DataContext);
	console.log(basket.length);
	return (
		<>
			<section>
				<div className={classes.header_container}>
					{/* logo section */}
					<div className={classes.logo_container}>
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
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
						<Link to="#" className={classes.language}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
								alt="flag"
							/>
							<select>
								<option value="">EN</option>
							</select>
						</Link>
						{/* three components */}
						<Link to="">
							<div>
								<p>Hello, sign in</p>
								<span>Account & Lists</span>
							</div>
						</Link>
						{/* orders */}
						<Link to="/orders">
							<p>Returns</p>
							<span>& Orders</span>
						</Link>
						{/* cart */}
						<Link to="/cart" className={classes.cart}>
							<BiCart size={35} />
							<span>{basket.length}</span>
						</Link>
					</div>
				</div>
			</section>
			<LowerHeader />
		</>
	);
}

export default Header;
