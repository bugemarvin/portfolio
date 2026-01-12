import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Divider
} from '@chakra-ui/react';

import { Experience } from '../data/resume';

export default function Resume() {
  return (
    <Box
      as="section"
      id="resume"
      maxW="1100px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={16}
    >
      {/* TITLE */}
      <Heading mb={12} textAlign="center">
        Resume
      </Heading>

      <Stack spacing={12}>
        {/* EXPERIENCE */}
        <Box>
          <Heading size="lg" mb={6}>
            Experience
          </Heading>

          <Stack spacing={8}>
            {Experience.map(exp => (
              <Box
                key={`${exp.company}-${exp.date}`}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                bg="white"
              >
                {/* Header */}
                <Flex
                  justify="space-between"
                  align="center"
                  flexWrap="wrap"
                  gap={4}
                >
                  <Flex align="center" gap={4}>
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        boxSize="80px"
                        objectFit="contain"
                        display={{ base: 'none', md: 'block' }}
                      />
                    )}

                    <Heading size="md">{exp.company}</Heading>
                  </Flex>

                  <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                    {exp.date}
                  </Text>
                </Flex>

                <Divider my={4} />

                {/* Role */}
                <Text fontSize="md" fontWeight="medium" mb={3}>
                  {exp.position}
                  {exp.location && (
                    <Text as="span" color="gray.600">
                      {' '}· {exp.location}
                    </Text>
                  )}
                </Text>

                {/* Responsibilities */}
                <List spacing={2} pl={4} styleType="disc">
                  {exp.experience.map((item, index) => (
                    <ListItem key={index} fontSize="sm">
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* EDUCATION */}
        <Box>
          <Heading size="lg" mb={6}>
            Education
          </Heading>

          <Stack spacing={8}>
            {/* ALX */}
            <Box p={6} borderRadius="lg" boxShadow="md" bg="white">
              <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
                <Flex align="center" gap={4}>
                  <Image
                    src="https://d3t1rrq9fohtv1.cloudfront.net/media/thumbnails/images/alx-organisation-logo-20190916-00002391/f6313bbddaca8b63d28b26a7b02bc3c7.jpg"
                    alt="ALX Africa logo"
                    boxSize="80px"
                    objectFit="contain"
                    display={{ base: 'none', md: 'block' }}
                  />
                  <Heading size="md">ALX Africa · Nairobi</Heading>
                </Flex>

                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                  Mar 2022 – May 2023
                </Text>
              </Flex>

              <Divider my={4} />

              <Text fontWeight="medium" mb={3}>
                Software Engineering
              </Text>

              <List spacing={2} pl={4} styleType="disc">
                <ListItem fontSize="sm">
                  Full-stack Software Engineering program with a backend focus,
                  emphasizing scalable systems, APIs, and real-world problem solving.
                </ListItem>
              </List>
            </Box>

            {/* KCA */}
            <Box p={6} borderRadius="lg" boxShadow="md" bg="white">
              <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
                <Flex align="center" gap={4}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/1/10/KCAU_logo.svg"
                    alt="KCA University logo"
                    boxSize="80px"
                    objectFit="contain"
                    display={{ base: 'none', md: 'block' }}
                  />
                  <Heading size="md">KCA University · Nairobi</Heading>
                </Flex>

                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                  Mar 2015 – Aug 2018
                </Text>
              </Flex>

              <Divider my={4} />

              <Text fontWeight="medium" mb={3}>
                Diploma in Information Technology
              </Text>

              <List spacing={2} pl={4} styleType="disc">
                <ListItem fontSize="sm">
                  Hands-on IT training covering software development, databases,
                  networking, cybersecurity, systems analysis, and web technologies.
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
