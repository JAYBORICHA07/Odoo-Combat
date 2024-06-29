import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  InputNumber,
  Layout,
  Typography,
} from "antd";
import { trpcFetch } from "../../trpc/trpcFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface ItemObj {
  id: number | string; // Assuming autoId() could be number or string
  categoryId: number;
  name: string;
  description: string;
  rentalPrice: number;
  availabilityStatus: boolean;
  location: string;
  image: string;
}

const Items: ItemObj = {
  id: 1,
  categoryId: 1,
  name: "Retro sofa chair",
  description:
    "The Aura Chair is a stylish and comfortable seating option that combines sleek design with functionality. Crafted from high-quality materials, this chair is designed to provide excellent lumbar support and promote good posture. With its adjustable height and tilt, the Aura Chair can be customized to meet your specific needs, whether you're working at a desk or relaxing in your living room. Its versatile design makes it a perfect fit for any space, from home offices to conference rooms.",
  rentalPrice: 1000,
  availabilityStatus: true,
  location: "India",
  image:
    "https://assets-global.website-files.com/642291d5b1dc03e88e1d5dc0/6427c3b1bb87cb6f661f2c73_product-main-17-p-800.jpg",
};

const getProduct = async () =>
  await trpcFetch.getProductByCategory.query({ category });

const ProductPage = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    getProduct();
  });

  const [form] = Form.useForm();
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Flex
        // justify="center"
        // align="center"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Col span={12}>
          <img
            src={Items.image}
            alt={Items.name}
            style={{ width: "90%", objectFit: "cover" }}
          />
        </Col>
        <Col span={12}>
          <Flex
            vertical
            align="flex-start"
            justify="start"
            style={{ width: "100%" }}
          >
            <Typography.Title
              style={{
                fontSize: "4rem",
                fontWeight: "initial",
                margin: "0",
                marginTop: "1rem",
              }}
            >
              {Items.name}
            </Typography.Title>
            <Typography.Paragraph
              style={{ fontSize: "1rem", margin: "1.5rem 0 1.5rem 0" }}
            >
              {Items.description}
            </Typography.Paragraph>
            <Typography.Title level={3}>
              ₹{Items.rentalPrice} / 30 days
            </Typography.Title>
            <Form
              form={form}
              layout="inline"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Form.Item
                name="quantity"
                label="Quantity"
                rules={[{ required: true, message: "Please input quantity" }]}
              >
                <InputNumber
                  min={1}
                  max={10}
                  style={{ width: "100%" }}
                  disabled={!Items.availabilityStatus}
                />
              </Form.Item>
              <Button
                disabled={!Items.availabilityStatus}
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Add to Cart
              </Button>
            </Form>
            <Divider />
            <Flex vertical align="flex-start" justify="start" gap={0}>
              <Typography.Title
                level={5}
                style={{ margin: "5px", fontWeight: "inherit" }}
              >
                SKU : {Items.id}
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ margin: "5px", fontWeight: "inherit" }}
              >
                Category SKU : {Items.categoryId}
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ margin: "5px", fontWeight: "inherit" }}
              >
                Availability : {Items.availabilityStatus ? "Yes" : "No"}
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ margin: "5px", fontWeight: "inherit" }}
              >
                Location : {Items.location}
              </Typography.Title>
            </Flex>
          </Flex>
        </Col>
      </Flex>
    </Layout>
  );
};

export default ProductPage;
