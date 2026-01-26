import Badge from "./components/Badge";
import Banner from "./components/index";
import Card from "./components/Card";
import CardIcon from "./components/icons/CardIcon";
import TestimonialsPic from "./components/TestimonialsPic";
import TestimonialsPicDetails from "./components/TestimonialsPicDetails";
import TestimonialsNoPic from "./components/TestimonialsNoPic";
import LogoIcon from "./components/icons/LogoIcon";

function App() {
  return (
    <>
      <h1 className="hero-title">Component Library++</h1>
      <div>
        <h2 className="badge-title">Badges</h2>
        <h2 className="sub-title">Square</h2>
        <div className="badge-square">
          <Badge color="gray" shape="square">
            Badge
          </Badge>
          <Badge color="red" shape="square">
            Badge
          </Badge>
          <Badge color="yellow" shape="square">
            Badge
          </Badge>
          <Badge color="green" shape="square">
            Badge
          </Badge>
          <Badge color="blue" shape="square">
            Badge
          </Badge>
          <Badge color="indigo" shape="square">
            Badge
          </Badge>
          <Badge color="purple" shape="square">
            Badge
          </Badge>
          <Badge color="pink" shape="square">
            Badge
          </Badge>
        </div>
        <h2 className="sub-title">Pill</h2>
        <div className="badge-pill">
          <Badge color="gray" shape="pill">
            Badge
          </Badge>
          <Badge color="red" shape="pill">
            Badge
          </Badge>
          <Badge color="yellow" shape="pill">
            Badge
          </Badge>
          <Badge color="green" shape="pill">
            Badge
          </Badge>
          <Badge color="blue" shape="pill">
            Badge
          </Badge>
          <Badge color="indigo" shape="pill">
            Badge
          </Badge>
          <Badge color="purple" shape="pill">
            Badge
          </Badge>
          <Badge color="pink" shape="pill">
            Badge
          </Badge>
        </div>
      </div>
      <div>
        <h2 className="banner-title">Banners</h2>
        <h2 className="sub-title">Success</h2>
        <Banner status="success">
          <Banner.Button>Congratulations!</Banner.Button>
          <Banner.Dropdown>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Dropdown>
        </Banner>
        <h2 className="sub-title">Warning</h2>
        <Banner status="warning">
          <Banner.Button>Attention</Banner.Button>
          <Banner.Dropdown>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </Banner.Dropdown>
        </Banner>
        <h2 className="sub-title">Error</h2>
        <Banner status="error">
          <Banner.Button>
            There is a problem with your application
          </Banner.Button>
          <Banner.Dropdown>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </Banner.Dropdown>
        </Banner>
        <h2 className="sub-title">Neutral</h2>
        <Banner status="neutral">
          <Banner.Button>Update available</Banner.Button>
          <Banner.Dropdown>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Dropdown>
        </Banner>
      </div>
      <div>
        <h2 className="card-title">Card</h2>
        <Card>
          <CardIcon className="card-icon" />
          <h3 className="card-subtitle">Easy Deployment</h3>
          <p className="card-info">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </p>
        </Card>
      </div>
      <div>
        <h2 className="test-title">Testimonials</h2>
        <h2 className="sub-title">With Pic</h2>
        <TestimonialsPic>
          <TestimonialsPicDetails />
        </TestimonialsPic>

        <h2 className="sub-title">No Pic</h2>
        <TestimonialsNoPic>
          <LogoIcon  className="test-logo-icon"/>
          <p className="testNoPic-info">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </p>
          <p className="testNoPic-name">
            May Andersons <span className="span-divider">/</span>{" "}
            <span className="span-title">Workcation, CTO</span>
          </p>
          <div className="testNoPicMobile-name">
            <p>May Andersons </p>
            <p className="span-title">Workcation, CTO</p>
          </div>
        </TestimonialsNoPic>
      </div>
    </>
  );
}

export default App;
