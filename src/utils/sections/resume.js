import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Experience } from '../data/resume';

const MotionBox = motion(Box);

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Resume() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const muted = useColorModeValue('gray.600', 'gray.400');
  const lineColor = useColorModeValue('gray.300', 'gray.600');

  // Separate work and education
  const workExperiences = Experience.filter(e => !e.type || e.type !== 'education');
  const educationExperiences = Experience.filter(e => e.type === 'education');

  return (
    <Box as="section" id="resume" w="100%" bg={bg} py={20}>
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 12 }}>
        <Heading textAlign="center" mb={16}>Resume</Heading>

        <Flex align="flex-start" gap={12}>
          {/* Sticky Side Title */}
          <Box
            position="sticky"
            top="120px"
            minW="200px"
            display={{ base: 'none', lg: 'block' }}
          >
            <Heading size="md">Experience</Heading>
          </Box>

          {/* Timeline */}
          <Box position="relative" w="100%">
            {/* Vertical line */}
            <Box
              position="absolute"
              left="60px"
              top="0"
              bottom="0"
              w="2px"
              bg={lineColor}
            />

            <Stack spacing={12}>
              {/* WORK EXPERIENCE */}
              {workExperiences.map((exp, index) => (
                <MotionBox
                  key={`${exp.company}-${exp.date}`}
                  position="relative"
                  pl={{ base: '72px', md: '120px' }}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  {/* Timeline Dot */}
                  <Box
                    position="absolute"
                    left="48px"
                    top="38px"
                    w="12px"
                    h="12px"
                    bg="blue.500"
                    borderRadius="full"
                    zIndex={2}
                  />

                  {/* Card */}
                  <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
                    {/* Logo + Heading */}
                    <Flex justify="space-between" align="center" flexWrap="wrap">
                      <Flex align="center" gap={4}>
                        {exp.logo && (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            boxSize="48px"
                            objectFit="contain"
                          />
                        )}
                        <Text
                          fontSize="2.4rem"
                          fontWeight="900"
                          color="#343a40"
                        >
                          {exp.company}
                        </Text>
                      </Flex>

                      <Text fontSize="md" color={muted}>{exp.date}</Text>
                    </Flex>

                    <Divider my={4} />

                    <Text fontSize="md" color={muted} mb={4}>
                      {exp.position} · {exp.location}
                    </Text>

                    <List spacing={3} pl={5} styleType="disc">
                      {exp.experience.map((item, i) => (
                        <ListItem
                          key={i}
                          fontSize="1.6rem"
                          fontWeight="400"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>

                    {exp.metrics && (
                      <Text mt={4} fontSize="sm" color="gray.500">
                        Key Metrics: {exp.metrics.join(', ')}
                      </Text>
                    )}
                  </Box>
                </MotionBox>
              ))}

              {/* EDUCATION */}
              {educationExperiences.length > 0 && (
                <Box pt={10}>
                  <Heading size="md" mb={8}>Education</Heading>

                  <Stack spacing={10}>
                    {educationExperiences.map((edu, idx) => (
                      <MotionBox
                        key={edu.institution}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                      >
                        <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
                          <Flex justify="space-between" align="center" flexWrap="wrap">
                            <Flex align="center" gap={4}>
                              {edu.logo && (
                                <Image
                                  src={edu.logo}
                                  alt={`${edu.institution} logo`}
                                  boxSize="48px"
                                  objectFit="contain"
                                />
                              )}
                              <Text
                                fontSize="2.4rem"
                                fontWeight="900"
                                color="#343a40"
                              >
                                {edu.institution} · {edu.location}
                              </Text>
                            </Flex>
                            <Text fontSize="md" color={muted}>{edu.date}</Text>
                          </Flex>

                          <Divider my={4} />

                          <Text fontSize="md" color={muted} mb={3}>
                            {edu.degree}
                          </Text>

                          <List spacing={3} pl={5} styleType="disc">
                            {edu.details.map((d, i) => (
                              <ListItem
                                key={i}
                                fontSize="1.6rem"
                                fontWeight="400"
                              >
                                {d}
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </MotionBox>
                    ))}
                  </Stack>
                </Box>
              )}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
