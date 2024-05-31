import { Input, Textarea, FormControl, FormLabel, Button as ChakraButton, VStack, Heading, Container, SimpleGrid, Box, Badge, Text } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";

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

  const [applications, setApplications] = useState([]);
  const [newApplication, setNewApplication] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setNewApplication({
      ...newApplication,
      [name]: value,
    });
  };

  const handleResumeChange = (e) => {
    setNewApplication({
      ...newApplication,
      resume: e.target.files[0],
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

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log("New Application:", newApplication);
    setApplications([...applications, newApplication]);
    // Clear the form
    setNewApplication({
      name: "",
      email: "",
      resume: null,
      coverLetter: "",
    });
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={6} mb={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Job Listings
        </Heading>
      </VStack>
      <VStack as="form" spacing={6} width="100%" onSubmit={handleApplicationSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={newApplication.name}
            onChange={handleApplicationChange}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            value={newApplication.email}
            onChange={handleApplicationChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Resume</FormLabel>
          <Input
            type="file"
            name="resume"
            onChange={handleResumeChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Cover Letter</FormLabel>
          <Textarea
            name="coverLetter"
            value={newApplication.coverLetter}
            onChange={handleApplicationChange}
            placeholder="Enter your cover letter"
          />
        </FormControl>
        <ChakraButton type="submit" colorScheme="teal" size="md">
          Apply
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