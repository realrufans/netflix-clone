import React from "react";

import { Accordions } from "../containers/accordion";
import { FooterContainer } from "../containers/footer";
import HeaderComponent from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { Features, OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderComponent>
        <Features>
          <Features.Title>Unlimited movies, TV shows, and more.</Features.Title>
          <Features.SubTitle>Watch anywhere. Cancel anytime</Features.SubTitle>

              
          <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                {/* <Form.Break /> */}
                <OptForm.Text>Ready to watch? Enter your email to create or restart
                your membership.</OptForm.Text>
            </OptForm>
        </Features>
      </HeaderComponent>
      <JumbotronContainer />
      <Accordions />

      <FooterContainer />
    </>
  );
}
