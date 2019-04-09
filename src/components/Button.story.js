import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Button } from "./Button";

storiesOf("Components|Button", module).add("default", () => (
  <>
    <Box mb="4">
      <Button mr="4" color="red">
        Button
      </Button>
      <Button size="medium">Button</Button>
    </Box>

    <Box mb="4">
      <Button variant="blue" mr="4">
        Blue
      </Button>
      <Button variant="blue" size="medium" mr="4">
        Blue
      </Button>
    </Box>

    <Box mb="4">
      <Button variant="green" mr="4">
        Green
      </Button>
      <Button variant="green" size="medium">
        Green
      </Button>
    </Box>

    <Box mb="4">
      <Button variant="yellow" mr="4">
        Green
      </Button>
      <Button variant="yellow" size="medium">
        Green
      </Button>
    </Box>

    <Box mb="4">
      <Button variant="red" mr="4">
        Red
      </Button>
      <Button variant="red" size="medium">
        Red
      </Button>
    </Box>

    <Box mb="4">
      <Button variant="active" mr="4">
        Active
      </Button>
      <Button variant="active" size="medium">
        Active
      </Button>
    </Box>

    <Box mb="4">
      <Button disabled="disabled" mr="4">
        Disabled
      </Button>
      <Button disabled="disabled" size="medium">
        Disabled
      </Button>
    </Box>

    <Box mb="4">
      <Button waiting mr="4">
        Waiting
      </Button>
      <Button waiting size="medium">
        Waiting
      </Button>
    </Box>

    <Box mb="4">
      <Button variant="blue" mr="4">
        <Box as="span" mr="2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M0 0H14" transform="translate(5.5 12.5)" strokeLinecap="round" />
            <path d="M0 14V0" transform="translate(12.5 5.5)" strokeLinecap="round" />
          </svg>
        </Box>
        Follow
      </Button>
      <Button variant="blue" size="medium">
        <Box as="span" mr="2">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M0 0H14" transform="translate(5.5 12.5)" strokeLinecap="round" />
            <path d="M0 14V0" transform="translate(12.5 5.5)" strokeLinecap="round" />
          </svg>
        </Box>
        Follow
      </Button>
    </Box>
  </>
));
