import QuoteIcon from "./icons/QuoteIcon"
import Logo from "../assets/May.png"
import LogoSmall from "../assets/MayMobile.png"
function TestimonialsPicDetails (){
    return (
        <>
        <img className="logo-pic" src={Logo} alt="May's profile picture" />
        <img className="logo-small" src={LogoSmall} alt="May's mobile profile picture" />
        <div className="test-flex">
          <QuoteIcon />
          <p className="test-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.{" "}
          </p>
          <div>
            <h4 className="test-name">May Andersons</h4>
            <p className="test-name-title">Workcation, CTO</p>
          </div>
        </div>
        </>
    )
}
export default TestimonialsPicDetails