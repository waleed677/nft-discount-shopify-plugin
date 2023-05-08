import React from 'react'
import {
  Page, Layout, Card,
  Form, FormLayout, Checkbox, TextField, Button
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

export default function CreateCompaign() {


  return (
    <Page
      narrowWidth
      breadcrumbs={[{ content: 'HomePage', url: '/' }]}
      primaryAction={{ content: 'Save' }}
      secondaryActions={[{ content: "Clear" }]}
    >

      <Layout>
        <Layout.Section>
          <Card title="Settings">
            <Card.Section>
              <p>Start your campaign setup</p>
            </Card.Section>
            <Card.Section>
              <Form >
                <FormLayout>
                  

                  <TextField
                    label="Compaign Name"
                    type="text"
                  />

                  <Button submit>Submit</Button>
                </FormLayout>
              </Form>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}