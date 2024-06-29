import { Layout, Typography } from "antd";


const { Footer } = Layout;

type FooterNavProps = React.HTMLAttributes<HTMLDivElement>;

const FooterNav = ({ ...others }: FooterNavProps) => {
  return (
    <Footer {...others}>
      
      <div style={{backgroundColor:"black",display:"flex"}}>
      <div>
          <Typography.Title
            level={1}
            style={{ color: "white" }}
          >
            Furniture
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{ color: "white", marginLeft: "80px",marginBottom:"50px", marginTop: "0" }}
          >
            Stay informed about new arrivals.
          </Typography.Title>
        </div>
      </div>
    </Footer>
  );
};

export default FooterNav;
