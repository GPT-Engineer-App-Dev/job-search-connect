import { useState } from "react";
import { Container, Text, VStack, Heading, Box, SimpleGrid, Badge, Input, Textarea, FormControl, FormLabel, Button as ChakraButton } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const initialJobs = [
  { title: "Frontend Developer", type: "Full-time", location: "Remote" },
  { title: "Backend Developer", type: "Part-time", location: "New York" },
  { title: "UI/UX Designer", type: "Full-time", location: "San Francisco" },
  { title: "Data Scientist", type: "Contract", location: "Chicago" },
  { title: "Product Manager", type: "Full-time", location: "Remote" },
];

const Index = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log("New Job:", newJob);
    setJobs([...jobs, newJob]);
    // Clear the form
    setNewJob({
      title: "",
      company: "",
      location: "",
      description: "",
      link: "",
    });
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={6} mb={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Job Listings
        </Heading>
      </VStack>
      <VStack as="form" spacing={6} width="100%" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input
            name="title"
            value={newJob.title}
            onChange={handleInputChange}
            placeholder="Enter job title"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input
            name="company"
            value={newJob.company}
            onChange={handleInputChange}
            placeholder="Enter company name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            value={newJob.location}
            onChange={handleInputChange}
            placeholder="Enter job location"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Job Description</FormLabel>
          <Textarea
            name="description"
            value={newJob.description}
            onChange={handleInputChange}
            placeholder="Enter job description"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Application Link</FormLabel>
          <Input
            name="link"
            value={newJob.link}
            onChange={handleInputChange}
            placeholder="Enter application link"
          />
        </FormControl>
        <ChakraButton type="submit" colorScheme="teal" size="md">
          Post Job
        </ChakraButton>
      </VStack>
      <SimpleGrid columns={3} spacing={10} width="100%" mt={10}>
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