import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const BasicDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [addressSection, setAddressSection] = React.useState(false);

  return (
    <Stack>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>First name:</FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
            value={resumeInfo.profile.firstname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                firstname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last name:</FormLabel>
          <Input
            type="text"
            placeholder="Your last name"
            value={resumeInfo.profile.lastname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                lastname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number:(Include country code)</FormLabel>
          <InputGroup>
            <InputLeftAddon
              style={{ background: "#D0E7D2", borderColor: "#618264" }}
              children="+"
            />
            <Input
              type="tel"
              placeholder="phone number"
              maxLength={15}
              pattern="[0-9]{10}"
              value={resumeInfo.profile.phone}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  phone: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Email address:</FormLabel>
          <Input
            type="email"
            placeholder="Your email address"
            value={resumeInfo.profile.email}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                email: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Linkedin:</FormLabel>
          <Input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            value={resumeInfo.profile.linkedin}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                linkedin: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Github:</FormLabel>
          <Input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            value={resumeInfo.profile.github}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                github: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Portfolio or Website:</FormLabel>
          <Input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            value={resumeInfo.profile.website}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                website: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl style={{ display: addressSection ? "block" : "none" }}>
          <FormLabel>Address: </FormLabel>
          <Input
            type="text"
            placeholder="city, country"
            value={resumeInfo.profile.address}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                address: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
      </SimpleGrid>
      {/* <Button
        colorScheme="green"
        onClick={() => {
          setAddressSection(!addressSection);
        }}
        isDisabled={addressSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Address
      </Button>
      <Button
       w="max-content"
          colorScheme="whatsapp"
          onClick={() => {
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button> */}
      <Stack direction="row" spacing={4} justify="end">
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            setAddressSection(!addressSection);
          }}
          isDisabled={addressSection}
        >
          Add Address
        </Button>
        <Button
          rightIcon={<ChevronRightIcon className="btn-icon" />}
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            setPage((p) => p + 1);
          }}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default BasicDetails;
