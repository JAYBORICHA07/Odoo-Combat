import React from "react";
import { Button, Typography, Row, Flex, Image, Card, Col } from "antd";
import { useAuth } from "../../hooks/useAuth";
import { trpc } from "../../trpc/trpc";

const Home: React.FC = () => {
  const user = trpc.user.useQuery();
  console.log(user);

  const { session, signIn } = useAuth();
  return (
    <div style={{ justifyContent: "center" }}>
      {session === null && (
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
          gutter={[16, 16]}
        >
          <Typography.Text style={{ textAlign: "center" }}>
            Please login to continue
          </Typography.Text>
          <Button type="primary" onClick={signIn}>
            Google Auth
          </Button>
        </Row>
      )}

      <Flex style={{ justifyContent: "space-between" }}>
        <Flex vertical gap={5} justify="center">
          <div
            style={{
              fontSize: "96px",
              lineHeight: "96px",
              letterSpacing: "-5px",
              margin: "0",
            }}
          >
            Discover Customizable Furniture
          </div>
          <span
            style={{ margin: "10px", fontWeight: "inherit", width: "400px" }}
          >
            Discover customizable furniture options that allow you to design
            pieces that perfectly fit your style and space, offering a blend of
            functionality and personal expression.
          </span>
          <Button
            type="primary"
            style={{
              width: "200px",
              padding: "20px",
              margin: "20px,0",
              fontWeight: "bolder",
            }}
          >
            Rent Now
          </Button>
        </Flex>
        <Image
          src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/666c33680acebe7debd4dd0b_hero-main-p-800.png"
          style={{ height: "660px", width: "700px" }}
        />
      </Flex>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", marginTop: "100px", height: "100%" }}>
          <div>
            <div
              style={{
                objectFit: "cover",
                marginBottom: "10px",
                marginRight: "15px",
              }}
            >
              <Image
                src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/6666e36113226526fcac62c9_about-01-p-500.jpg"
                style={{ height: "325px" }}
              />
            </div>
            <div style={{ objectFit: "cover", marginRight: "15px" }}>
              <Image
                src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/6666e3745ce089e36e8841ef_about-02-p-500.jpg"
                style={{ height: "325px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div style={{ objectFit: "cover" }}>
            <Image
              src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/6666e37d99243da2b9639f77_about-03-p-500.jpg"
              style={{ height: "660px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginLeft: "150px",
            width: "300px",
            marginTop: "100px",
          }}
        >
          <div
            style={{
              width: "300px",
            }}
          >
            <div
              style={{
                fontSize: "30px",
              }}
            >
              Creating your perfect living space
            </div>
            <div
              style={{
                lineHeight: "25px",
                fontSize: "20px",
              }}
            >
              Amet egestas sed semper quis nibh Sed pretium nunc vel nibh.
              Consectetur tellus pharetra egestas eu quam augue non. Dolor
              semper dui volutpat eu sed Id ut sed eget malesuada urna arcu
              hendrerit accumsan. Massa fringilla viverra a consequat ipsum dui.
              In diam sit ultrices pellentesque
            </div>
            <Button
              type="primary"
              style={{
                width: "200px",
                padding: "20px",
                fontWeight: "bolder",
                marginTop: "20px",
              }}
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginTop: "100px",
          width: "95vw",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://cdn.prod.website-files.com/6666bcc94e2268cfdfe7948a/6667eb1b1754a0f554a7982d_blog-main-02-p-2000.jpg"
          style={{ width: "100vw", height: "auto" }}
        ></Image>
        <div
          style={{
            top: "30%",
            left: "20%",
            position: "absolute",
            color: "white",
            fontSize: "60px",
            width: "800px",
            fontWeight: "bolder",
          }}
        >
          Discover our commitment to quality and customer satisfaction.
        </div>
      </div>
      <div>
        <h3 style={{ marginTop: "80px" }}>Testimonials</h3>
        <h1>Clients Review</h1>
      </div>

      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ width: "100%" }}>
            <Flex justify="space-between">
              <Typography.Title style={{ marginTop: "0" }} level={3}>
                Bessie Cooper
              </Typography.Title>
              <Typography.Title style={{ margin: "4px" }} level={5}>
                4.5/5
              </Typography.Title>
            </Flex>
            Purus velit venenatis facilisis nunc sed risus vulputate. Tristique
            tempus tincidunt leo amet aliquet sollicitudin diam. Eget velit
            suscipit eu lectus consectetur in. Nunc purus at cursus arcu
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Flex justify="space-between">
              <Typography.Title style={{ marginTop: "0" }} level={3}>
                Bessie Cooper
              </Typography.Title>
              <Typography.Title style={{ marginTop: "4px" }} level={5}>
                4.5/5
              </Typography.Title>
            </Flex>
            Purus velit venenatis facilisis nunc sed risus vulputate. Tristique
            tempus tincidunt leo amet aliquet sollicitudin diam. Eget velit
            suscipit eu lectus consectetur in. Nunc purus at cursus arcu
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Flex justify="space-between">
              <Typography.Title style={{ marginTop: "0" }} level={3}>
                Bessie Cooper
              </Typography.Title>
              <Typography.Title style={{ marginTop: "4px" }} level={5}>
                4.5/5
              </Typography.Title>
            </Flex>
            Purus velit venenatis facilisis nunc sed risus vulputate. Tristique
            tempus tincidunt leo amet aliquet sollicitudin diam. Eget velit
            suscipit eu lectus consectetur in. Nunc purus at cursus arcu
          </Card>
        </Col>
      </Row>
      <div style={{ margin: "100px 0 100px 0" }}>
        <Row gutter={16}>
          <Col span={8}>
            <div style={{ width: "100%" }}>
              <Flex justify="flex-start">
                <Image src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/6666d9abe9b4195e6b821540_feature-01.svg"></Image>
              </Flex>
              <Typography.Title level={5}>01</Typography.Title>
              <Typography.Title style={{margin:'0', padding:'10px 0'}} level={3}>
                Sustainable Materials
              </Typography.Title>
              <Typography.Paragraph>
                Aenean facilisis ut aliquet tincidunt elit montes blandit quis
                id urna amet.
              </Typography.Paragraph>
            </div>
          </Col>
          <Col span={8}>
          <div style={{width:'100%'}}>
              <Flex justify="flex-start">
                <Image src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/6666dc1e81d21ec86b2f3592_feature-02.svg"></Image>
              </Flex>
              <Typography.Title  level={5}>02</Typography.Title>
              <Typography.Title style={{margin:'0', padding:'10px 0'}} level={3}>
                Warrenty Included
              </Typography.Title>
              <Typography.Paragraph>
              Elit pharetra tempus nisi faucibus in mattis nibh urna maecenas.
              </Typography.Paragraph>
            </div>
          </Col>
          <Col span={8}>
          <div style={{ width: "100%" }}>
              <Flex justify="flex-start">
                <Image src="https://cdn.prod.website-files.com/65f28b94b7a422d719e8ff02/6666dc286aa2f24de9d3dbc0_feature-03.svg"></Image>
              </Flex>
              <Typography.Title level={5}>03</Typography.Title>
              <Typography.Title style={{margin:'0', padding:'10px 0'}} level={3}>
                Delivery and Free Shipping
              </Typography.Title>
              <Typography.Paragraph>
              Elit pharetra tempus nisi faucibus in mattis nibh urna maecenas.
              </Typography.Paragraph>
            </div>
          </Col>
        </Row>
      </div>

     
    </div>
  );
};

export default Home;
