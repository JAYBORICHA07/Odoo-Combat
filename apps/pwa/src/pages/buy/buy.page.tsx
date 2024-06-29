import { Button, Card, Flex, Layout, Typography } from "antd";
import { trpcFetch } from "../../trpc/trpcFetch";

interface ItemObj {
  name: string;
  url: string;
}

interface FraturedItemObj {
  name: string;
  price: string;
  imageUrl: string;
}
const product = await trpcFetch.getProduct.query();
const products = product.map((item) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    imageUrl: item.image,
    price: item.rentalPrice,
  };
});
const line1 = products.slice(0, 4);
const line2 = products.slice(8, 12);

const BuyPage = () => {
  const Items: ItemObj[] = [
    {
      name: "Sofas",
      url: "https://cdn.prod.website-files.com/6666bcc94e2268cfdfe7948a/666abe189385958996955805_category-01.png",
    },
    {
      name: "Chairs",
      url: "https://cdn.prod.website-files.com/6666bcc94e2268cfdfe7948a/666abed00877adbdbb258f56_category-03.png",
    },
    {
      name: "Beds",
      url: "https://cdn.prod.website-files.com/6666bcc94e2268cfdfe7948a/666c2d9670a84281adb8ebad_category-04.png",
    },
    {
      name: "Tables",
      url: "https://cdn.prod.website-files.com/6666bcc94e2268cfdfe7948a/666abee02bc41bb2eace443b_category-02.png",
    },
    {
      name: "Lamps",
      url: "https://cdn.prod.website-files.com/6666bcc94e2268cfdfe7948a/666abe5a252cb4b441412f72_category-05.png",
    },
  ];

  const FraturedItemCard = ({
    name,
    price,
    imageUrl: url,
  }: FraturedItemObj) => {
    return (
      <Card
        hoverable
        bordered={false}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          maxWidth: "501px",
        }}
      >
        <img
          src={url}
          alt={name}
          style={{ maxWidth: "250px", height: "300px", objectFit: "cover" }}
        />
        <Typography.Title level={2} style={{ fontWeight: "inherit" }}>
          {name}
        </Typography.Title>
        <Typography>{price}</Typography>
        <Button type="primary" style={{ width: "100%", marginTop: "1rem" }}>
          Add to Cart
        </Button>
      </Card>
    );
  };

  const ItemCard = ({ name, url }: ItemObj) => {
    return (
      <Card
        hoverable
        bordered={false}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={url} alt={name} style={{ width: "150px", height: "150px" }} />
        <Typography.Title level={4}>{name}</Typography.Title>
      </Card>
    );
  };

  return (
    <Layout style={{ textAlign: "center", height: "100vh", width: "100%" }}>
      <div>
        <Typography.Title style={{ fontWeight: "bolder", fontSize: "4rem" }}>
          Categories
        </Typography.Title>
        <Flex
          content="center"
          align="center"
          style={{ overflow: "scroll", padding: "1rem" }}
          gap={3}
        >
          {Items.map((item) => (
            <ItemCard key={item.name} name={item.name} url={item.url} />
          ))}
        </Flex>
      </div>
      <div style={{ padding: "1rem" }}>
        <Flex vertical align="flex-start" justify="start">
          <Typography.Title level={5}>Best Selling</Typography.Title>
          <Typography.Title style={{ padding: 0, margin: 0 }}>
            Featured Collection
          </Typography.Title>
        </Flex>
      </div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          content="center"
          align="center"
          wrap
          style={{ overflow: "scroll", padding: "1rem" }}
          gap={10}
        >
          {line1.map((item) => (
            <FraturedItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </Flex>
        <Flex
          justify="space-around"
          align="center"
          wrap
          style={{ overflow: "scroll", padding: "1rem" }}
          gap={10}
        >
          {line2.map((item) => (
            <FraturedItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </Flex>
      </div>
    </Layout>
  );
};

export default BuyPage;
