import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Button

} from "@shopify/polaris";
import { useState } from "react";
import { TitleBar, useNavigate } from "@shopify/app-bridge-react";

import { compaignImage } from "../assets"
import { ProductsCard } from "../components";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";



export default function HomePage() {

  const navigate = useNavigate();
  const storeName = "Is Not Art";

  const [isLoading, setIsLoading] = useState(true);

  const {
    data,
    isLoading: isLoadingName,
  } = useAppQuery({
    url: "/api/getStoreName",
    reactQueryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    },
  });


const handleCreateNewCompagin = () => {
  navigate("/compaign/create");
}


  return (
    <Page  >
      <TitleBar title={`Welcome to ${storeName}`} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <div style={{ padding: "0 20px", textAlign: "center" }}>
              <Image
                source={compaignImage}
                alt="Create a new compaign"
                width={150}
              />
            </div>
            <TextContainer >
              <p spacing="loose" style={{ margin: "20px", textAlign: "center" }}>No campaign <br />
                <span>Get started by creating a new campaign.</span>
              </p>

            </TextContainer>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button primary onClick={handleCreateNewCompagin}>Create New Campaign</Button>
            </div>

          </Card>
        </Layout.Section>
        {/* <Layout.Section>
          <ProductsCard />
        </Layout.Section> */}
      </Layout>
    </Page>
  );
}
