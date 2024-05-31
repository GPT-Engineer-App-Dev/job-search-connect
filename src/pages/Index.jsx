import { Container, Text, VStack, Heading, Box, Button, SimpleGrid, Badge } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const jobs = [
  { title: "Frontend Developer", type: "Full-time", location: "Remote" },
  { title: "Backend Developer", type: "Part-time", location: "New York" },
  { title: "UI/UX Designer", type: "Full-time", location: "San Francisco" },
  { title: "Data Scientist", type: "Contract", location: "Chicago" },
  { title: "Product Manager", type: "Full-time", location: "Remote" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={6} mb={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Job Listings
        </Heading>
        <Button colorScheme="teal" size="lg">
          Post a Job
        </Button>
      </VStack>
      <SimpleGrid columns={3} spacing={10} width="100%">
        {jobs.map((job, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <FaBriefcase size={30} style={{ marginBottom: "10px" }} />
            <Heading as="h3" size="md" mb={2}>
              {job.title}
            </Heading>
            <Text>
              <Badge colorScheme="green" mr={2}>
                {job.type}
              </Badge>
              {job.location}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;